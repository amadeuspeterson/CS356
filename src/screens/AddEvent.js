import React, { useRef, useState } from "react";
import {
  TextInput,
  View,
  Text,
  Animated,
  Button,
  Dimensions,
} from "react-native";

export default function AddEvent() {
  const windowHeight = Dimensions.get("window").height;
  const popAnim = useRef(new Animated.Value(windowHeight * -1)).current;
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const popIn = () => {
    Animated.timing(popAnim, {
      toValue: windowHeight * 0.35 * -1,
      duration: 300,
      useNativeDriver: true,
    }).start(popOut());
  };

  const popOut = () => {
    setTimeout(() => {
      Animated.timing(popAnim, {
        toValue: windowHeight * -1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, 2000);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          marginBottom: 10,
        }}
      >
        Add Event
      </Text>
      <View
        style={{
          margin: "auto",
          width: "80%",
        }}
      >
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
          }}
          placeholder="Event Name"
          onChangeText={(text) => setEventName(text)}
          value={eventName}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
          }}
          placeholder="Date"
          onChangeText={(text) => setDate(text)}
          value={date}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
          }}
          placeholder="Time"
          onChangeText={(text) => setTime(text)}
          value={time}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
          }}
          placeholder="Location"
          onChangeText={(text) => setLocation(text)}
          value={location}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
          }}
          placeholder="Description"
          onChangeText={(text) => setDescription(text)}
          value={description}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
          }}
          placeholder="Image"
          onChangeText={(text) => setImage(text)}
          value={image}
        />
      </View>
      <Button title="Add Event" color="#000f99" onPress={() => popIn()} />
    </View>
  );
}
