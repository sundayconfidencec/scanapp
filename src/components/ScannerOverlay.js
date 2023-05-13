import React from 'react';
import { StyleSheet, View } from 'react-native';

const ScannerOverlay = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.row}>
     <View>
     <View style={styles.boxs}></View>
        <View style={styles.box}></View>
     </View>
       <View>
       <View style={styles.bos}></View>
        <View style={styles.bosx}></View>
       </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
  },
  row: {
    flexDirection: 'column',
  },

  boxs: {
    width: 20,
    height: 20,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth:0,
    borderColor: 'white',
    position: 'absolute',
    top: 200,
    left: 50,
  },
  box: {
    width: 20,
    height: 20,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth:0,
    borderColor: 'white',
    position: 'absolute',
    top: 400,
    left: 50,
    right: 0,
    bottom: 0,
  },
  bos: {
    width: 20,
    height: 20,
    borderTopWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth:2,
    borderColor: 'white',
    position: 'absolute',
    top: 200,
    left: 250,
    right: 0,
    bottom: 0,
  },
  bosx: {
    width: 20,
    height: 20,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth:2,
    borderColor: 'white',
    position: 'absolute',
    top: 400,
    left: 250,
    right: 0,
    bottom: 0,
  },
});

export default ScannerOverlay;
