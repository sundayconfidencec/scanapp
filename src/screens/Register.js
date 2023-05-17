import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { SignupAccount, signupError } from "../redux/actions/AuthActions";

function Register({ auth, SignupAccount, signupError }) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
//   const handleSubmit = () => {
   
//   };



const handleUpdateState = (name, value) => {
  switch (name) {
    case "name":
      setName(value);
      break;
    case "email":
      setEmail(value);
      break;
    case "password":
      setPassword(value);
      break;
    case "confirmPassword":
      setConfirmPassword(value);
      break;
    case "role":
      setRole(value);
      break;
    case "twitter":
      setTwitter(value);
      break;
    case "linkedin":
      setLinkedin(value);
      break;
    default:
      break;
  }
};

const handleSubmit = () => {
  if (password !== confirmPassword) {
    signupError("Passwords did not match!");
    return;
  }

  SignupAccount(email, password);

  

  // Reset the input fields after successful registration
  setName("");
  setEmail("");
  setPassword("");
  setConfirmPassword("");
  setRole("");
  setTwitter("");
  setLinkedin("");
};

  async function getPermissionAsync() {
    if (Constants.platform.ios) {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need media library permissions to make this work!');
      }
    }

    if (Constants.platform.android) {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need media library permissions to make this work!');
      }
    }
  }

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // set the selected image as the state of the component
      setImage(result.uri);
    }
  }
  async function handleEditPicture() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }
  
  return (
    <View style={styles.main}>
    <View style={styles.imagediv}>
    {image ? (
       <View >
         <Image source={{ uri: image }} style={styles.image} />
         <TouchableOpacity style={styles.editIcon} onPress={handleEditPicture}>
         <Text style={styles.iconTexts}>EDIT PROFILE PHOTO</Text>
      </TouchableOpacity>
       </View>
      ) : (
        <TouchableOpacity title="Select Image" onPress={pickImage} style={styles.iconContainer}>
      <Ionicons name="person-outline" size={50} color="goldenrod" />
          <Text style={styles.iconText}>ADD PROFILE PHOTO</Text>
        </TouchableOpacity>
      )}
    </View>
   
    <View style={styles.container}>
    {auth.error.signup && 
        <Text style={{color: "red"}}>{auth.error.signup}</Text>
          }
    <View style={styles.div}>
    <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => handleUpdateState("name", text)}
        placeholder="Enter your name"
      />
    </View>

     <View style={styles.div}>
     <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => handleUpdateState("email", text)}
        placeholder="sunday@gmail.com"
        keyboardType="email-address"
      />
     </View>

   <View style={styles.div}>
   <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => handleUpdateState("password", text)}
        placeholder="......"
        keyboardType="phone-pad"
      />
   </View>
   <View style={styles.div}>
   <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={(text) => handleUpdateState("confirmPassword", text)}
        placeholder="......"
        keyboardType="phone-pad"
      />
   </View>

     <View style={styles.div}>
     <Text style={styles.label}>Role</Text>
      <TextInput
        style={styles.input}
        value={role}
        onChangeText={(text) => handleUpdateState("role", text)}
        placeholder="Software developer"
      />
     </View>

    <View style={styles.div}>
    <Text style={styles.label}>Twitter</Text>
      <TextInput
        style={styles.input}
        value={twitter}
        onChangeText={(text) => handleUpdateState("twitter", text)}
        placeholder="@sunday"
      />
    </View>

     <View style={styles.div}>
     <Text style={styles.label}>LinkedIn</Text>
      <TextInput
        style={styles.input}
        value={linkedin}
        onChangeText={(text) => handleUpdateState("linkedin", text)}
        placeholder=" /sunday"
      />
     </View>

     <TouchableOpacity style={styles.button} title="register" onPress={handleSubmit}>
  <Text style={styles.buttonText}>REGISTER</Text>
</TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
 
    flex:1
  },
  container: {
    flex:1
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
    alignSelf:"center",
  },
  imagediv:{
    width: '100%',
    height:"50%",
    backgroundColor:"transparent",
    flex:0.4,
    
  
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent:"center",
    marginTop: 30
  },
  iconText: {
    color: 'goldenrod',
    marginTop: 5,
  },
  label: {
    paddingBottom:5,
    paddingRight: 5
   
  },
  input: {
    textAlign: "right",
    paddingBottom: 5,
  },
  button: {
    backgroundColor: 'goldenrod',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20

  },
  buttonText: {
    color: '#fff',
  },
  div:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor:"gray",
    marginHorizontal: 20
  },
  editIcon: {
    position: 'absolute',
    top: 50,
    right: 80,
  },
  iconTexts:{
    color:"white",
    borderWidth: 1,
    borderColor:"white",
    padding:5
  }

});

const mapStateToProps = (state) => {
  return { auth:state};
};


export default connect(mapStateToProps, { SignupAccount, signupError })(Register);

