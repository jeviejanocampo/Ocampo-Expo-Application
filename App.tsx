import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/(tabs)/login/login-user';
import SignupUser from './app/(tabs)/signup/signup-user'; 
import Home from './app/(tabs)/landingpage/home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginUser">
       <Stack.Screen
          name="LoginUser"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupUser"
          component={SignupUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
