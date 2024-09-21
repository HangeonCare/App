import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RegisterDevice from "./src/pages/registerDevice";

import SideBar from "./src/components/sideBar";
import Main from "./src/pages/main";
import Login from "./src/pages/login";
import SignUp from "./src/pages/signup";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="main" component={Main} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            options={{ headerShown: false }}
            component={DrawerNavigator}
          />
          <Stack.Screen
            name="login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="registerDevice"
            options={{ headerShown: false }}
            component={RegisterDevice}
          />
          <Stack.Screen
            name="SignUp"
            options={{ headerShown: false }}
            component={SignUp}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
