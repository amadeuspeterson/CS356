import { View, Text, Image } from "react-native";

export default function Activity({ prop1 }) {
  return (
    <View>
        <Text>{prop1} Single Activity</Text>
        <Text></Text>
        <Image source={require('../../../assets/bass_guy.jpg')} />
    </View>
  );
}
