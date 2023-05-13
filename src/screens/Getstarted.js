import React from 'react';
import logo from "../asset/cccc.png";
import { View , Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
function Getstarted({ navigation }) {
  return (
 <View style={styles.main}>
    <View style={styles.logodiv}>
    <Image source={logo} alt={"logo"} style={styles.img}/>
    </View>
    
    <Text style={styles.eldeesharetext}>ELDEESHARES CONTACTS</Text>
    <View>
        <TouchableOpacity style={styles.Getstartedbtn} title="getting"
        onPress={() => navigation.navigate('keep')}>
        <View style={styles.hrcontainer}>
        <Text style={styles.Getstartedtext}>GET STARTED</Text>
        <View style={styles.hr}>

        </View>
        </View>
    </TouchableOpacity>
    </View>
 </View>
  )
}
const styles = StyleSheet.create({
    main:{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
       
        },
        logodiv:{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 100,
          
        },
    img:{
        width: 150,
        height:150,
    },
    eldeesharetext:{
        marginBottom: 150
    },
    Getstartedbtn:{
      
    },
    Getstartedtext:{

    },
    hrcontainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    hr:{
        borderBottomColor: 'goldenrod',
        borderBottomWidth: 2,
        width: 80,
        marginVertical: 5,
    }
})

export default Getstarted;