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
import { connect } from 'react-redux';
import { LoginAccount} from "../redux/actions/AuthActions";


function SignIn({auth, LoginAccount}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleUpdateState = (name, value) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    LoginAccount(email, password);

    // Reset the input fields after successful registration
    setEmail("");
    setPassword("");
  };
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.imgdiv}>
        <Image source={keep} alt={'logo'} style={styles.img} />
      </View>
      <View style={styles.container}>
        <View style={styles.loginTextContainer}>
        {auth.error.login && 
        <Text style={{color: "red"}}>{auth.error.login}</Text>
          }
          <View style={styles.emaildiv}>
            <Text style={styles.email}>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="confidence@gmail.com"
              placeholderTextColor={'#aaaaaa'}
              autoCapitalize={false}
              autoCorrect={false}
              value={email}
              onChangeText={(text) => handleUpdateState("email", text)}
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
              onChangeText={(text) => handleUpdateState("password", text)}
            />
          </View>
          <TouchableOpacity style={styles.signin}  title="signin"
       onPress={handleSubmit} >
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

const mapStateToProps = (state) => {
  return { auth:state};
};


export default connect(mapStateToProps, { LoginAccount})(SignIn);
