import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";

export default function Activity({ eventName, image, date }) {
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
        <Button title="Learn More" />
        <Button title="Add to Calendar" />
        <Button title="RSVP" />
      </View>
    </View>
  );
}
