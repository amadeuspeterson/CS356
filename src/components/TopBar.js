import { Header } from "react-native-elements";

export default function TopBar() {
  return (
    <Header
      backgroundColor="#000f99"
      centerComponent={{
        text: "ANTISOCIAL",
        style: {
          color: "#fff",
          fontSize: 30,
          height: 70,
        },
      }}
    />
  );
}
