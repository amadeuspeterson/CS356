import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Activities from "./src/screens/activities/Activities";
import Map from "./src/screens/Map";
import Login from "./src/screens/Login";
import { navStyles } from "./src/styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapModal from "./src/screens/MapModal";
import AddEvent from "./src/screens/AddEvent";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainPages() {
  return (
    <Tab.Navigator
      initialRouteName="Activities"
      screenOptions={{
        tabBarActiveTintColor: navStyles.primaryColor.color,
        tabBarInactiveTintColor: navStyles.secondaryColor.color,
        tabBarStyle: navStyles.primaryBG,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Activities"
        component={Activities}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map" color={color} size={26} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Add Event"
        component={AddEvent}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-plus"
              color={color}
              size={26}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="MainPages"
          component={MainPages}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Group
          screenOptions={{ presentation: "modal", headerShown: false }}
        >
          <Stack.Screen name="MapModal" component={MapModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
