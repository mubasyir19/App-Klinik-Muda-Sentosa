import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen, RegisterScreen, SplashScreen } from '../screens';
import { History, Home, Profile } from '../tabs';
import { BottomNav } from '../components';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNav {...props} />}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='History' component={History} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name='MainApp' component={MainApp} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
