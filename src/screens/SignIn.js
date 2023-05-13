import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import keep from '../asset/signin.jpeg';

function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.imgdiv}>
        <Image source={keep} alt={'logo'} style={styles.img} />
      </View>
      <View style={styles.container}>
        <View style={styles.loginTextContainer}>
          <View style={styles.emaildiv}>
            <Text style={styles.email}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="confidence@gmail.com"
              placeholderTextColor={'#aaaaaa'}
              autoCapitalize={false}
              autoCorrect={false}
              value={email}
              onChangeText={(text) => {
                console.log(text);
                setEmail(text);
              }}
            />
          </View>
          <View style={styles.passworddiv}>
            <Text style={styles.password}>Password:</Text>
            <TextInput
              style={styles.inputp}
              placeholder="......"
              placeholderTextColor={'#aaaaaa'}
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              value={password}
              onChangeText={(text) => {
                console.log(text);
                setPassword(text);
              }}
            />
          </View>
          <TouchableOpacity style={styles.signin}  title="signin"
        onPress={() => navigation.navigate('scanhome')}>
            <Text style={styles.signintext}>SIGN IN</Text>
          </TouchableOpacity>
          <View></View>
          <View>
            <Text>
              Forgot?
              <Text style={styles.forgotPassword}> Reset Password</Text>
            </Text>
          </View>
          <View style={styles.forgotPassworddiv}>
            <View style={styles.hr}></View>
          </View>
        </View>
        <View></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
  },
  input: {
    fontSize: 18,
    textAlign: 'right',
    paddingVertical: 5,
  },
  inputp: {
    fontSize: 18,
    textAlign: 'right',
    paddingVertical: 5,
  },
  forgotPassword: {
    marginVertical: 3,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  imgdiv: {
    width: '100%',
    height: 250,
  },
  password: {
    paddingTop: 20,
  },
  email: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  passworddiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emaildiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  signin: {
    height: 40,
    backgroundColor: 'goldenrod',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 20,
  },
  signintext: {
    color: 'white',
  },
  hr: {
    borderBottomColor: 'goldenrod',
    borderBottomWidth: 2,
    width: 110,
    marginEnd: 43,
  },
forgotPassword:{
    marginVertical: 3,

},




img:{
                width: "100%",
                height:"100%",
            },
            imgdiv:{
                width: "100%",
                height:250
            },
            password:{
                paddingTop: 20
            },
            email:{
                paddingTop: 20,
                paddingBottom: 20

            },
            passworddiv:{
                flexDirection: "row",
                justifyContent: "space-between",
            },
           emaildiv:{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 30,
                borderBottomWidth: 1,
                borderBottomColor:"gray",
            },
            signin:{
                height:40,
                backgroundColor: "goldenrod",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 3,
                marginVertical: 20,
                },
            signintext:{
               color:"white"
                },
                hr:{
                    borderBottomColor: 'goldenrod',
                    borderBottomWidth: 2,
                    width: 110,
                    marginEnd:43
                },
                forgotPassworddiv:{
                    justifyContent: 'end',
                    alignItems: 'center',
                }

})

export default SignIn;
