import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

import SideBar from "./src/components/sideBar";
import Main from "./src/pages/main";
import LogOut from "./src/components/logOut";
import Profile from "./src/pages/Profile";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      headerShown={false}
      drawerContent={(props) => <SideBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen headerShown={false} name="main" component={Main} />
      <Drawer.Screen headerShown={false} name="Settings" component={LogOut} />
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
            headerShown={false}
            component={DrawerNavigator}
          />
          <Stack.Screen
            name="Profile"
            headerShown={false}
            component={Profile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
