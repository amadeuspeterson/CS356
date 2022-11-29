import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import Toast from "react-native-root-toast";

export default function Activity({ eventName, image, date }) {
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
        <Text>{date}</Text>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {eventName}
        </Text>
      </View>
      <Image
        style={{
          width: "100%",
        }}
        source={image}
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
