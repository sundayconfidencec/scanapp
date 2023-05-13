import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Linking } from 'react-native';



function MemberProfile({navigation}) {
    const phoneNumber = '+233559998971';
    const emailAddress = 'sundayconfy@gmail.com';


    const handlePhonePress = () => {
        Linking.openURL(`tel:${phoneNumber}`);
      };

      const handleEmailPress = () => {
        Linking.openURL(`mailto:${emailAddress}`);
      };

  return (
    <View style={styles.main}>
      
        <View style={styles.profile}>
        <View style={styles.imgdiv}>
        <Image source={require('../asset/p.jpg')} alt="profile" style={styles.img}/>
        </View>
        <View style={styles.subprofile}>
        <Text style={styles.subprofilename}>sunday confy</Text>
        <Text style={styles.subprofilerole}>Software Developer</Text>
        </View>
        </View>
        <View style={styles.icon}>
            <FontAwesome name="twitter-square" size={30} color="#1DA1F2" style={styles.twittericon} />
            <FontAwesome name="linkedin-square" size={30} color="#0077B5" style={styles.linkedinicon} />
        </View>
        <View style={styles.contacts}>
            <View style={styles.calldiv}>
            <View>
            <Ionicons name="call-outline" size={18} color="black" />
            </View>
            <View style={styles.call}>
                <TouchableOpacity onPress={handlePhonePress}>
                <Text>+23355 999 8971</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.emaildiv}>
            <View>
            <Fontisto name="email" size={18} color="black" />
            </View>
            <View style={styles.email}>
                <TouchableOpacity onPress={handleEmailPress}>
                <Text>sundayconfy@gmail.com</Text>
                </TouchableOpacity>
            </View>
            </View>
            <View style={styles.locationdiv}>
            <View>
            <SimpleLineIcons name="location-pin" size={18} color="black" />
            </View>
            <View style={styles.location}>
                <Text>Lagos, Nigeria</Text>
            </View>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    
main:{
    flex: 1,
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
  icon:{
    flexDirection:"row",
    marginLeft:50,
  },
  linkedinicon:{
    margin:10
  }
  ,
  twittericon:{
    margin:10
  }
  ,
  img:{
    width:50,
    height:50,
    borderRadius:25
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
  calldiv:{
    flexDirection:"row",
    marginVertical:10
  },
  emaildiv:{
    flexDirection:"row",
    marginVertical:10
  },
  locationdiv:{
    flexDirection:"row",
    marginVertical:10
  },
contacts:{
    marginLeft:60
},
call:{
    marginLeft:10
},
email:{
    marginLeft:10
},
location:{
    marginLeft:10,
   
},

});

export default MemberProfile;