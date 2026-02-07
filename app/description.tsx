import Ionicons from "@expo/vector-icons/Ionicons";

import { Image, StyleSheet, Text, View } from "react-native";
export default function Description() {
  return (
    <View style={{ flexDirection: "column", gap: "10" }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/image 20.png")}
          style={styles.image}
        />
        <View style={styles.dotsContainer}>
          <View style={styles.activeDot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
          marginHorizontal: 10,
        }}
      >
        <Text style={styles.text}> Terra Former Tractor 2021</Text>
        <Text style={styles.text}>$240.00</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
          marginHorizontal: 10,
        }}
      >
        <Text style={{ fontFamily: "300" }}> Light Performer Dirt</Text>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <Ionicons name="star" size={24} color="gold" />
          <Ionicons name="star" size={24} color="gold" />
          <Ionicons name="star" size={24} color="gold" />
          <Ionicons name="star" size={24} color="gold" />
          <Ionicons name="star" size={24} color="gold" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // centers dots
  },

  image: {
    borderRadius: 16,
  },

  dotsContainer: {
    flexDirection: "row",
    marginTop: 8,
    gap: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
  },

  activeDot: {
    backgroundColor: "#0F1729",
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
});
