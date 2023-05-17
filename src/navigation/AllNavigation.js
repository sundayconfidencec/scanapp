import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import Getstarted from "../screens/Getstarted";
import Keep from '../screens/Keep';
import Register from '../screens/Register';
import SignIn from '../screens/SignIn';
import ScanHome from '../screens/ScanHome';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MemberProfile from '../screens/MemberProfile';
import MyProfile from '../screens/MyProfile';
import { connect } from 'react-redux';
import { Logout } from '../redux/actions/AuthActions';

const stack = createStackNavigator()
function AllNavigation({auth, Logout}) {
  return (
<NavigationContainer>
{
                    auth.login ? 
                    //show app
<stack.Navigator initialRouteName='scanhome' >
                    <stack.Screen
        name='scanhome'
        component={ScanHome}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Image
              source={require('../asset/ccccc.png')}
              style={{ width: 150, height: 40 }}
             
            />
          ),
          headerStyle: { backgroundColor: 'goldenrod' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('myprofile')} style={{ marginRight: 20 }}>
              <Ionicons name="person-outline" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity 
            onPress={Logout}
            style={{ marginRight: 20 }}>
           <Text> Logout</Text>
            </TouchableOpacity> )
        })}
      /> 
      
      <stack.Screen 
  name='memberprofile' 
  component={MemberProfile} 
  options={({ navigation }) => ({
    title: 'Member Profile',
    headerStyle: { backgroundColor: 'goldenrod' },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 20 }}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
    ),
    headerRight: () => (
        <TouchableOpacity 
        onPress={Logout}
        style={{ marginRight: 20 }}>
       <Text> Logout</Text>
        </TouchableOpacity> )
  })}
/>
      <stack.Screen 
  name='myprofile' 
  component={MyProfile} 
  options={({ navigation }) => ({
    title: 'My Profile',
    headerStyle: { backgroundColor: 'goldenrod' },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 20 }}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
    ),
    headerRight: () => (
        <TouchableOpacity 
        onPress={Logout}
        style={{ marginRight: 20 }}>
       <Text> Logout</Text>
        </TouchableOpacity> )
  })}
/>
{/* <stack.Screen name='scan' component={Scan}  options={{headerShown: false}} /> */}
</stack.Navigator>
                    :
                    //show cred
  <stack.Navigator initialRouteName='getstarted' >
  <stack.Screen name='getstarteds' component={Getstarted}  options={{headerShown: false}} />
  <stack.Screen name='keep' component={Keep} options={{headerShown: false}}  />
  <stack.Screen 
  name='signin' 
  component={SignIn} 
  options={({ navigation }) => ({
    title: 'Sign In',
    headerStyle: { backgroundColor: 'goldenrod' },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 20 }}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
    )
  })}
/>

  <stack.Screen name='register' component={Register}options={({ navigation }) => ({
    title: 'Register',
    headerStyle: { backgroundColor: 'goldenrod' },
    headerTintColor: 'white',
    headerTitleAlign: 'center',
    headerLeft: () => (
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 20 }}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
    )
  })}
/>  



        {/* <stack.Screen name='scan' component={Scan}  options={{headerShown: false}} /> */}

</stack.Navigator>

            }


</NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const mapStateToProps = (state) => {
    return { auth:state}
  };

export default connect(mapStateToProps,{Logout})(AllNavigation);