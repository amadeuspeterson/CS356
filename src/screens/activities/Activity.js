import { View, Text, Image } from "react-native";
import { Button } from "react-native-elements";


export default function Activity({ name, image, date, sample }) {
  const toShow = sample?image:{uri: image};
  console.log(image)
  return (
    <View>
      <View
        style={{
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        <Text>{(new Date(date).toLocaleString())}</Text>
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
          height:200
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
        <Button title="Learn More" />
        <Button title="Add to Calendar" />
        <Button title="RSVP" />
      </View>
    </View>
  );
}
