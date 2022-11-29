import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import Toast from "react-native-root-toast";

export default function Activity({ name, image, date, sample }) {
  const toShow = sample ? image : { uri: image };
  // console.log(image)

  const rsvpToast = () => {
    Toast.show("Your RSVP has been sent!", {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
    });
  };

  const addCalendarToast = () => {
    Toast.show("Event added to your calendar!", {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
    });
  };

  const learnMoreToast = () => {
    Toast.show("Information about the event has been sent to your email!", {
      duration: Toast.durations.LONG,
      position: Toast.positions.TOP,
    });
  };
  return (
    <View>
      <View
        style={{
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        <Text>{new Date(date).toLocaleString()}</Text>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {name}
        </Text>
      </View>
      <Image
        style={{
          width: "100%",
          height: 200,
        }}
        source={toShow}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          margin: 10,
        }}
      >
        <Button title="Learn More" onPress={learnMoreToast} />
        <Button title="Add to Calendar" onPress={addCalendarToast} />
        <Button title="RSVP" onPress={rsvpToast} />
      </View>
    </View>
  );
}
