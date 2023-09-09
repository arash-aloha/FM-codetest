import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "../../screens/home";
import GymScreen from "../../screens/gym";
import MenuDrawer from "../drawerNavigation";

export type RootStackParamList = {
  Home: undefined;
  GymUnit: undefined;
};

const Navigation = () => {
  const Drawer = createDrawerNavigator<RootStackParamList>();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false, drawerPosition: "right" }}
          drawerContent={(props) => <MenuDrawer {...props} />}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="GymUnit" component={GymScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
