import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RegisterDevice from "./src/pages/registerDevice";

import { Login } from "./src/pages/login";
import { Main } from "C:/Users/user/Hangion-app/SSD-app/src/pages/main";
import { SignUp } from "C:/Users/user/Hangion-app/SSD-app/src/pages/signup";
import Graph from "./src/pages/graph";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
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
          <Stack.Screen
            name="Main"
            options={{ headerShown: false }}
            component={Main}
          />
          <Stack.Screen
            name="Graph"
            component={Graph}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
