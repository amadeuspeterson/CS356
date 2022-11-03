import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Activities from "../screens/Activities";

const Tab = createBottomTabNavigator();

export default function Map() {
  return (
    <>
      <View>
        <Text>Map</Text>
      </View>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad" }}
      >
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarLabel: "Map",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Activities"
          component={Activities}
          options={{
            tabBarLabel: "Activities",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
