import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import Getstarted from './src/screens/Getstarted';
import Keep from './src/screens/Keep';
import Register from './src/screens/Register';
import SignIn from './src/screens/SignIn';
import ScanHome from './src/screens/ScanHome';
import Scan from "./src/screens/Scan"
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MemberProfile from './src/screens/MemberProfile';
import MyProfile from './src/screens/MyProfile';

const stack = createStackNavigator()
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

//     <View style={styles.container}>
// <Getstarted/>
// <Keep />
// <SignIn/>
// <Register/>
// </View>

// screenOptions={{header: ()=> null}}
<NavigationContainer>

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
        style={{ marginLeft: 20 }}
      >
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
<stack.Screen
        name='scanhome'
        component={ScanHome}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Image
              source={require('./src/asset/ccccc.png')}
              style={{ width: 150, height: 40 }}
             
            />
          ),
          headerStyle: { backgroundColor: 'goldenrod' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('myprofile')} style={{ marginRight: 20 }}>
              <Ionicons name="person-outline" size={24} color="white" />
            </TouchableOpacity>
          ),
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
    )
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
    )
  })}
/>


        {/* <stack.Screen name='scan' component={Scan}  options={{headerShown: false}} /> */}

</stack.Navigator>

</NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
