import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "gray",
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
              <Feather name="home" size={30} color="darkgrey" />
            ) : (
              <AntDesign name="home" size={30} color="black" />
            );
          },
          tabBarLabelStyle: { fontSize: 15, color: "grey", paddingTop: 9 },
        }}
      />
      <Tabs.Screen
        name="Map"
        options={{
          title: "Map",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Entypo name="location-pin" size={30} color="darkgrey" />
            ) : (
              <EvilIcons name="location" size={30} color="black" />
            );
          },
          tabBarLabelStyle: { fontSize: 15, color: "grey", paddingTop: 9 },
        }}
      />

      <Tabs.Screen
        name="Wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <Ionicons name="wallet-outline" size={30} color="darkgrey" />
            ) : (
              <Entypo name="wallet" size={30} color="black" />
            );
          },
          tabBarLabelStyle: { fontSize: 15, color: "grey", paddingTop: 9 },
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <AntDesign name="setting" size={30} color="darkgrey" />
            ) : (
              <Feather name="settings" size={30} color="black" />
            );
          },
          tabBarLabelStyle: { fontSize: 15, color: "grey", paddingTop: 9 },
        }}
      />
    </Tabs>
  );
}
