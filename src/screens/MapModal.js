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
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function MapModal({ navigation }) {
  const [eventName, setEventName] = useState("Name");
  const [eventDate, setEventDate] = useState("Date");
  const [eventAddress, setEventAddress] = useState("Address");
  const [eventDescription, setEventDescription] = useState("Description");
  const [title, setTitle] = useState("Create an Event");
  const [editable, setEditable] = useState(true);
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(new Date());
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

  const onChangeDate = (e,date) => {
    setDate(new Date(date))
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.uri)

    if (!result.cancelled) {
      setImage(result.uri);
    }
    
   };

  return (
    <>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          top: 50,
          height: "100%",
          alignItems: "center",
        }}
        style={{ marginBottom: -80 }}
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
        <View
          style={{
            padding: 8,
            width: 360,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 18 }}>Date:</Text>
          <DateTimePicker
            style={{ width: 240, fontSize: 14 }}
            value={date}
            mode={"datetime"}
            display={"compact"}
            onChange={onChangeDate}
          
          />
        </View>
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
      </KeyboardAwareScrollView>
      {editable && (
        <View
          style={{
            alignItems: "center",
            display: "absolute",
            marginBottom: 10,
            marginTop: 10,
            bottom: 0,
          }}
        >
          <TouchableOpacity
            onPress={async () => {
              //store data

              const events =
                JSON.parse(await AsyncStorage.getItem("events")) || [];

              const newEvent = {
                name: eventName,
                date: date.toISOString(),
                address: eventAddress,
                description: eventDescription,
                coords: route.coords,
                image,
              };
              events.push(newEvent);

              AsyncStorage.setItem("events", JSON.stringify(events));

              navigation.navigate("Map", { reset: true });
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
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
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "black",
    borderRadius: 7,
    width: 360,
    padding: 8,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: "white",
  },
});
