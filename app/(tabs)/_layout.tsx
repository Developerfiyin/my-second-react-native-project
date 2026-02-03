import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen name="index" options={{ title: "home" }} />
      <Tabs.Screen name="about" options={{ title: "about" }} />
      <Tabs.Screen name="app" options={{ title: "app" }} />
    </Tabs>
  );
}
