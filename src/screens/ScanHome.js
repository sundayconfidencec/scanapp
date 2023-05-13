import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { MaterialIcons } from '@expo/vector-icons';
import ScannerOverlay from "../components/ScannerOverlay";



function ScanHome({navigation}) {
  const [qrData, setQrData] = useState('');
  const [scannedData, setScannedData] = useState(null);
  const [showScanner, setShowScanner] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [flashOn, setFlashOn] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      if (status === 'granted') {
        const cameras = await Camera.getAvailableCamerasAsync();
        const torchSupported = cameras
          .map(({ torchAvailable }) => torchAvailable)
          .includes(true);
        if (torchSupported) {
          const [camera] = cameras;
          const torchMode = flashOn ? 'on' : 'off';
          try {
            await camera.setTorchModeAsync(torchMode);
          } catch (error) {
            console.log('Error handling torch mode:', error);
          }
        }
      }
    })();
  }, [flashOn]);

  const handleBarCodeScanned = ({ data }) => {
  console.log('Scanned QR code:', data);
  setScannedData(data);
  setShowScanner(false);
  navigation.navigate("memberprofile", { details: data });
};
  
  
  const handleScanPress = () => {
    setIsScannerOpen(true);
  };

  const handleScanQRPress = () => {
    setShowScanner(true);
    setScannedData(null);
    setIsScannerOpen(true);
  
    // Hide header
    navigation.setOptions({
      headerShown: false,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: !showScanner,
    });
  }, [navigation, showScanner]);

  const handleInputChange = (text) => {
    if (text.trim() === '') {
      setQrData(' ');
    } else {
      setQrData(text);
    }
  }
  const toggleTorch = () => {
    Torch.switchState(!isTorchOn);
    setIsTorchOn(!isTorchOn);
  };

  const toggleFlash = () => {
    setFlashOn(!flashOn);
  };

  const name = 'sunday confidence';
  const role = 'Software Developer';
  const qrDataString = `${name}, ${role}`;

  return (
    <View style={styles.view}>
      <View style={styles.headingdiv}>
        <Text style={styles.heading}>Exchange Contact Information</Text>
        <Text style={styles.subheading}>Scan this QR code to share your contacts</Text>
      </View>
      
      <View style={styles.qrContainer}>
        <QRCode
          value={JSON.stringify(qrDataString)}
          size={200}
          color="goldenrod"
          backgroundColor="white"
        />
      </View>
      
      <View style={styles.profile}>
        <View style={styles.imgdiv}>
          <Image source={require('../asset/p.jpg')} alt="profile" style={styles.img}/>
        </View>
        <View style={styles.subprofile}>
          <Text style={styles.subprofilename}>sunday confy</Text>
          <Text style={styles.subprofilerole}>Software Developer</Text>
        </View>
      </View>
      
      {showScanner ? (
        <>
          <BarCodeScanner
  onBarCodeScanned={handleBarCodeScanned}
  style={[StyleSheet.absoluteFillObject, styles.BarCodeScanner]}
>
    <ScannerOverlay/>
  <Text style={styles.scannerText}>Place QR Code within Frame</Text>
</BarCodeScanner>
          <TouchableOpacity onPress={() => setShowScanner(false)} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleFlash} style={styles.cancelButtonb}>
  <Text style={styles.cancelButtonbText}>
    {flashOn ? <MaterialIcons name="flash-on" size={24} color="white" /> : <MaterialIcons name="flash-off" size={24} color="white" />}
  </Text>
</TouchableOpacity>
        </>
      ) : (<Text></Text>)}

      {!showScanner && <View style={styles.hr}></View>}
      
      {isScannerOpen ? (
        <View style={[styles.scanmaindiv, { position: 'absolute', bottom: 0, right:0, left:0 }]}>
          <View style={styles.wantdiv}>
            <Text style={styles.want}>want to share your contact?</Text>
          </View>
          <View>
            <TouchableOpacity  onPress={() => navigation.navigate('memberprofile' )} style={styles.scan}>
              <Text>Send QR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.main}>
            {scannedData && (
              <View>
              </View>
            )}
          </View>
        </View>
      ) : (
        <View style={[styles.scanmaindiv, { position: 'absolute', bottom: 0, right:0, left:0 }]}>
          <View style={styles.wantdiv}>
            <Text style={styles.want}>want to add new connection?</Text>
          </View>
          <View>
            <TouchableOpacity onPress={handleScanQRPress} style={styles.scan}>
              <Text>Scan QR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.main}>
            {scannedData && (
              <View>
                <Text>Scanned QR code:</Text>
                <Text>{scannedData.type}: {scannedData.data}</Text>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
 view:{
flex:1,
backgroundColor:"white"
 },
  heading: {
    fontSize: 15,
    marginVertical: 10,
    marginLeft:30
  },
  subheading: {
    fontSize: 15,
    marginBottom: 20,
    color:"gray",
    marginHorizontal:30

  },

 
  qrContainer: {
    alignItems:"center",
    marginTop:20
  },
 
  imgdiv:{
    width:50,
    height:50,
    marginRight:10,
    marginLeft: 50,
   
  },
  profile:{
    flexDirection:"row",
    marginTop: 50,
    marginBottom:20
  },
  img:{
    width:50,
    height:50,
    borderRadius:25
  },
  hr:{
    borderBottomWidth: 0.5,
    borderBottomColor:"gray"
  },
  scanmaindiv:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:20,
    backgroundColor:"white",
    paddingVertical:50,
    paddingHorizontal:20
    
  },
  
  headingdiv:{
    marginTop:30
  },
  scan:{
    borderColor:"goldenrod",
    borderWidth:2,
    paddingHorizontal:10,
    paddingVertical:5,
  },
  want:{
    opacity: 0.7,
    marginRight:30

  },
  subprofile:{
    paddingTop:5
  },
  subprofilename:{
    marginBottom:5,
    color:"black"
  },
  subprofilerole:{
    color:"gray"
  },
BarCodeScanner:{
    width: "100%",
    height:"100%",
    
    
   
},
cancelButton: {
    position: 'absolute',
    top: 40,
    right: 10,
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
cancelButtonb: {
    position: 'absolute',
    top: 40,
    left: 10,
    padding: 10,
    borderRadius: 5,
  },
  cancelButtonbText: {
    color: 'black',
    fontWeight: 'bold',
  },
  scannerText: {
    position: 'absolute',
    top: '70%',
    left: '40%',
    transform: [{translateX: -50}, {translateY: -10}],
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  }
  
  
});

export default ScanHome;
