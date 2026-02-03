import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "darkgray",
        tabBarStyle: {
          backgroundColor: "white",
          height: 110,
          paddingBottom: 20,
          paddingTop: 15,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Feather name="home" size={35} color="darkgrey" />
            ) : (
              <AntDesign name="home" size={35} color="black" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Map"
        options={{
          title: "Map",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <SimpleLineIcons name="location-pin" size={24} color="darkgrey" />
            ) : (
              <EvilIcons name="location" size={35} color="black" />
            );
          },
          tabBarLabelStyle: { fontSize: 14, color: "black" },
        }}
      />
    </Tabs>
  );
}
