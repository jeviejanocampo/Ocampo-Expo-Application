import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/(tabs)/home/login-user';
import SignupUser from './app/(tabs)/signup/signup-user'; // signup screen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={LoginScreen}     
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupUser"       
          component={SignupUser}       
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
