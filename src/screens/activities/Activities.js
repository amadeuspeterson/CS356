import { SafeAreaView, ScrollView, useColorScheme } from "react-native";
import Activity from "./Activity";

const data = [1, 2, 3]
const betterData = [
  {
    groupName: "ARTS & ENTERTAINMENT",
    eventName: "Dominik Wagner double bass",
    image: "bass_guy.jpg",
    dateTime: "5:30 PM TUESDAY, NOVEMBER 08" // TODO: fix this date format
  },
]

export default function Activities() {

  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{backgroundColor:colorScheme=="dark"?"black":"white"}}>
      <ScrollView style={{backgroundColor:'white'}}>{
        data.map(a => (
          <Activity prop1={a} key={a} />
        ))
      }</ScrollView>
     </SafeAreaView>
  );
}
