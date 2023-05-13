import React from 'react';
import { View , Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import keep from "../asset/keep.jpeg";

function Keep({ navigation }) {
  return (
  <View style={styles.main}>
        <View style={styles.imgdiv}>
        <Image source={keep} alt={"logo"} style={styles.img}/>
        </View>
<View>
    <Text style={styles.keeptext}>
        KEEP IN TOUCH WITH PEOPLE OF ELDEESHARES
    </Text>
</View>
<View>
    <Text style={styles.signintextHead}>
       Sign in or register with your Eldeshares email
    </Text>
</View>
<View style={styles.keepbtns}>
    <View style={styles.hrcontainer}>
    <TouchableOpacity title="keep"
        onPress={() => navigation.navigate('register')}>
        <Text style={styles.registertext}>REGISTER</Text>
        <View style={styles.hrr}></View>
    </TouchableOpacity>
    </View>
    <View style={styles.hrcontainer}>
    <TouchableOpacity title="keeps"
        onPress={() => navigation.navigate('signin')}>
        <Text style={styles.signintext}>SIGN IN</Text>
        <View style={styles.hrs}></View>
    </TouchableOpacity>
    </View>
  
</View>
  </View>
  )
}

const styles = StyleSheet.create({
   main:{
    backgroundColor: '#fff',
    flex:1
   },
        img:{
            width: "100%",
            height:"100%",
        },
        imgdiv:{
            width: "100%",
            height:"50%",
            flex: 0.7,
        },
        keepbtns:{
            justifyContent: "space-around",
            flexDirection: "row",
            marginTop: 120
        },
        hrcontainer:{
            justifyContent: 'center',
            alignItems: 'center',
        },
        hrr:{
            borderBottomColor: 'goldenrod',
            borderBottomWidth: 2,
            width: 71,
            marginVertical: 3,
        },
        hrs:{
            borderBottomColor: 'goldenrod',
            borderBottomWidth: 2,
            width: 53,
            marginVertical: 3,
        },
        keeptext:{
            fontSize: 15,
            paddingVertical: 5,
            marginLeft: 15,
            marginVertical: 20
            // fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',  
        },
        signintextHead:{
            marginLeft: 15,
            color: "gray"

        }
       

    })
export default Keep;