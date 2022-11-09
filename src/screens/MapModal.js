import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function MapModal({ navigation }) {
  const [eventName, setEventName] = useState("Name");
  const [eventDate, setEventDate] = useState("Date");
  const [eventAddress, setEventAddress] = useState("Address");
  const [eventDescription, setEventDescription] = useState("Description");
  const [testInput, setTestInput] = useState("testInput");
  const [title, setTitle] = useState("Create an Event");
  const [editable, setEditable] = useState(true);
  const route = useRoute().params;

  useEffect(() => {
    if (!route.edit) {
      setTitle(route.marks.name);
      setEventName(route.marks.name);
      setEventDate(route.marks.date);
      setEventAddress(route.marks.address);
      setEventDescription(route.marks.description);
    }
    setEditable(route.edit);
  }, [route]);

  return (
    <ScrollView
      contentContainerStyle={{ top: 50, alignItems: "center", height: "100%" }}
    >
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>{title}</Text>

      <TextInput
        style={[styles.textInput, { borderWidth: editable ? 2 : 0 }]}
        // value={eventName}
        onChangeText={setEventName}
        placeholder={editable ? "Name" : eventName}
        placeholderTextColor={"black"}
        editable={editable}
      />
      <TextInput
        style={[styles.textInput, { borderWidth: editable ? 2 : 0 }]}
        // value={eventDate}
        onChangeText={setEventDate}
        placeholder={editable ? "Date" : eventDate}
        placeholderTextColor={"black"}
        editable={editable}
      />
      <TextInput
        multiline
        numberOfLines={1}
        style={[
          styles.textInput,
          { height: 80, borderWidth: editable ? 2 : 0 },
        ]}
        // value={eventAddress}
        onChangeText={setEventAddress}
        placeholder={editable ? "Address" : eventAddress}
        placeholderTextColor={"black"}
        editable={editable}
      />
      <TextInput
        multiline
        numberOfLines={1}
        style={[
          styles.textInput,
          { height: 150, borderWidth: editable ? 2 : 0 },
        ]}
        // value={eventDescription}
        onChangeText={setEventDescription}
        placeholder={editable ? "Description" : eventDescription}
        placeholderTextColor={"black"}
        editable={editable}
      />
      <TextInput
        // defaultValue={testInput}
        onChange={setTestInput}
      />

      {editable && (
        <View style={{ position: "absolute", bottom: "15%" }}>
          <TouchableOpacity
            onPress={async () => {
              //store data

              const events =
                JSON.parse(await AsyncStorage.getItem("events")) || [];
              const newEvent = {
                name: eventName,
                date: eventDate,
                address: eventAddress,
                description: eventDescription,
                coords: route.coords,
              };
              console.log(newEvent);
              console.log(events.length);
              events.push(newEvent);
              AsyncStorage.setItem("events", JSON.stringify(events));

              navigation.navigate("Map", { reset: true });
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
              width: 360,
              height: 36,
              backgroundColor: "purple",
              borderRadius: 7,
            }}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    borderRadius: 7,
    width: 360,
    padding: 8,
    marginTop: 10,
    backgroundColor: "white",
  },
});
