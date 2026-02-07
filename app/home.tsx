import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View>
      <Image source={require("../assets/images/image 4.png")} style={{}} />
      <Text> Get the best service needed for your car here</Text>

      <Pressable
        style={styles.pressable}
        onPress={() => router.push("/description")}
      >
        <Text style={styles.text1}> Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: "#0f172a",

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
