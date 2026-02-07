import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View
      style={{
        flexDirection: "column",
        gap: 6,
      }}
    >
      <View>
        <Image
          source={require("../assets/images/image 4.png")}
          style={{ marginHorizontal: "auto", top: "auto", marginTop: 80 }}
        />
        <Image
          source={require("../assets/images/Ellipse 1.png")}
          style={{ marginHorizontal: "auto", bottom: 100 }}
        />
      </View>

      <Text
        style={{
          fontWeight: "600",
          color: "#0f172a",
          fontSize: 32,
          textAlign: "center",
          marginBottom: 20,
          marginHorizontal: "10%",
        }}
      >
        Get the best service needed for your car here
      </Text>

      <Pressable
        style={styles.pressable}
        onPress={() => router.push("/Sign-up")}
      >
        <Text style={styles.text1}> Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: "#0f172a",
    marginTop: "10%",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  text1: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
