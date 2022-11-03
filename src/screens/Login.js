import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import TopBar from "../components/TopBar";

export default function Login({ navigation }) {
  return (
    <>
      <TopBar />
      <View style={styles.container}>
        <View>
          <Text>Username</Text>
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderColor: "gray",
              borderWidth: 1,
            }}
            placeholder="Username"
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text>Password</Text>
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderColor: "gray",
              borderWidth: 1,
            }}
            placeholder="Password"
          />
        </View>
        <View>
          <Button
            title="Login"
            color="#000f99"
            onPress={() => navigation.navigate("Map")}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
