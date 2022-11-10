import { SafeAreaView, ScrollView, useColorScheme } from "react-native";
import Activity from "./Activity";

const data = [1, 2, 3];
const betterData = [
  {
    eventKey: "1",
    eventName: "Dominik Wagner double bass",
    image: require("../../../assets/bass_guy.jpg"),
    date: "TUESDAY, NOVEMBER 08 5:30 PM", // TODO: fix this date format
  },
  {
    eventKey: "2",
    eventName: "Light the Y",
    image: require("../../../assets/light_Y.jpeg"),
    date: "THURSDAY, NOVEMBER 10 9:30 PM", // TODO: fix this date format
  },
  {
    eventKey: "3",
    eventName: "BYU Football at Home vs. Boise State",
    image: require("../../../assets/football.jpeg"),
    date: "SATURDAY, NOVEMBER 12 8:30 PM", // TODO: fix this date format
  },
];

export default function Activities() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView
      style={{ backgroundColor: colorScheme == "dark" ? "black" : "white" }}
    >
      <ScrollView style={{ backgroundColor: "white" }}>
        {/* {data.map((a) => (
          <Activity {...betterData[0]} key={a} />
        ))} */}
        {betterData.map((event) => (
          <Activity {...event} key={event.eventKey} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
