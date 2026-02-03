import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarInactiveTintColor: "blue" }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="Home" options={{ title: "Home Screen" }} />
    </Tabs>
  );
}
