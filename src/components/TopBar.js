import { Header } from "react-native-elements";
import { navStyles } from "../styles";

export default function TopBar() {
  return (
    <Header
      backgroundColor={navStyles.primaryBG.backgroundColor}
      centerComponent={{
        text: "ANTISOCIAL",
        style: {
          color: "#3e2465",
          fontSize: 30,
          height: 70,
        },
      }}
    />
  );
}
