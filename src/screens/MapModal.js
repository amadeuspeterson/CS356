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
  Image,
  Platform
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function MapModal({ navigation }) {
  const [eventName, setEventName] = useState("Name");
  const [eventDate, setEventDate] = useState("Date");
  const [eventAddress, setEventAddress] = useState("Address");
  const [eventDescription, setEventDescription] = useState("Description");
  const [title, setTitle] = useState("Create an Event");
  const [editable, setEditable] = useState(true);
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(new Date(1598051730000));
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

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   DateTimePickerAndroid.open({
  //     value: date,
  //     onChange,
  //     mode: currentMode,
  //     is24Hour: true,
  //   });
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };

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
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      {/* <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" /> */}
      {/* <Text>selected: {date.toLocaleString()}</Text> */}

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
