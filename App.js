import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Activities from "./src/screens/Activities";
import Map from "./src/screens/Map";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Activities" component={Activities} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
