import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

import SideBar from "./src/components/sideBar";
import Main from "./src/pages/main";
import LogOut from "./src/components/logOut";
import Profile from "./src/pages/Profile";
import Login from "./src/pages/login";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="main" component={Main} />
      <Drawer.Screen name="login" component={Login} />
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
            name="Profile"
            options={{ headerShown: false }}
            component={Profile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
