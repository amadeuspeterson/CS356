import { View, Text, Button } from "react-native";
import { useRef, useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { defaultEventLocations } from "../../data";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Map({ navigation }) {
  const [permissions, requestPermission] = Location.useForegroundPermissions();
  if (!permissions) {
    requestPermission();
  }
  const mapRef = useRef();
  const [location, setLocation] = useState();
  const [events, setEvents] = useState([]);
  const route = useRoute().params;
  useEffect(() => {
    const camSet = async () => {
      const currPos = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Low,
      });
      // This doesn't support android for zoom
      await mapRef.current.animateCamera({
        center: {
          latitude: currPos.coords.latitude,
          longitude: currPos.coords.longitude,
        },
        pitch: 0,
        heading: 0,
        altitude: 10000,
      });
    };
    camSet();
  }, []);

  useEffect(() => {
    (async function getData() {
      const events = JSON.parse(await AsyncStorage.getItem("events")) || [];
      setEvents(events);
    })();
  }, [route]);

  return (
    <View>
      <MapView
        ref={mapRef}
        onLongPress={(e) => {
          //setLocation(e.nativeEvent.coordinate);
          let newEvents = [];
          newEvents = newEvents.concat(events);
          const coords = e.nativeEvent.coordinate;
          newEvents.push(coords);
          setEvents(newEvents);
          navigation.navigate("MapModal", { edit: true, coords });
        }}
        // followsUserLocation={true}
        showsUserLocation={true}
        style={{ height: "100%" }}
      >
        {/* <Button
          title="test"
          onPress={async () => {
            console.log(await mapRef.current.getCurrentLocation);
          }}
        ></Button> */}
        {events.map((marks, index) => {
          return (
            <Marker
              coordinate={marks.coords}
              key={index + "mark"}
              title={marks.name}
              onCalloutPress={() => {
                console.log(marks);
                navigation.navigate("MapModal", { marks, edit: false });
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "purple",
                  height: 24,
                  width: 24,
                  borderRadius: 12,
                }}
              >
                <MaterialCommunityIcons size={20} name="star" color={"white"} />
              </View>
            </Marker>
          );
        })}
        <Marker coordinate={location}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "purple",
              height: 24,
              width: 24,
              borderRadius: 12,
            }}
          >
            <MaterialCommunityIcons size={20} name="star" color={"white"} />
          </View>
        </Marker>
      </MapView>
    </View>
  );
}
