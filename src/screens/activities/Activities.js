import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from "react-native";
import Activity from "./Activity";
import Toast from "react-native-root-toast";

const data = [1, 2, 3];
const betterData = [
  {
    sample: true,
    eventKey: "1",
    name: "Dominik Wagner double bass",
    image: require("../../../assets/bass_guy.jpg"),
    date: "TUESDAY, DECEMBER 08 2022 5:30 PM", // TODO: fix this date format
  },
  {
    sample: true,
    eventKey: "2",
    name: "Light the Y",
    image: require("../../../assets/light_Y.jpeg"),
    date: "THURSDAY, DECEMBER 1 2022 9:30 PM", // TODO: fix this date format
  },
  {
    sample: true,
    eventKey: "3",
    name: "BYU Football at Home vs. Boise State",
    image: require("../../../assets/football.jpeg"),
    date: "SATURDAY, DECEMBER 12 2022 8:30 PM", // TODO: fix this date format
  },
];

export default function Activities() {
  const colorScheme = useColorScheme();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = async () => {
    setLoading(true);
    let allEvents = [];
    (async function getData() {
      const events = JSON.parse(await AsyncStorage.getItem("events")) || [];
      setEvents(
        events
          .concat(betterData)
          .sort((a, b) => new Date(a.date) > new Date(b.date))
      );
    })();
    setLoading(false);
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: colorScheme == "dark" ? "black" : "white" }}
    >
      <ScrollView
        style={{ backgroundColor: "white" }}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
      >
        {/* {data.map((a) => (
          <Activity {...betterData[0]} key={a} />
        ))} */}
        {events.map((event) => (
          <Activity {...event} key={event.eventKey} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
