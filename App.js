import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Activities from "./src/screens/Activities";
import Map from "./src/screens/Map";
import { navStyles } from "./src/styles";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Activities"
        screenOptions={{
          tabBarActiveTintColor: navStyles.primaryColor.color,
          tabBarInactiveTintColor: navStyles.secondaryColor.color,
          tabBarStyle: navStyles.primaryBG,
        }}
      >
        <Tab.Screen name="Activities" component={Activities} options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
          tabBarShowLabel: false,
          
        }}/>
        <Tab.Screen name="Map" component={Map} options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
          tabBarShowLabel: false,
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
