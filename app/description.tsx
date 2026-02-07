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
        <Text style={{ fontFamily: "300", marginBottom: 10 }}>
          Light Performer Dirt
        </Text>

        <View style={{ flexDirection: "row", gap: 10 }}>
          <Ionicons name="star" size={24} color="gold" />
          <Ionicons name="star" size={24} color="gold" />
          <Ionicons name="star" size={24} color="gold" />
          <Ionicons name="star" size={24} color="gold" />
          <Ionicons name="star" size={24} color="gold" />
        </View>
      </View>

      <Text
        style={{
          fontSize: 15,
          padding: 10,
          backgroundColor: "#d9d9d9",
          marginRight: "auto",
          marginLeft: 15,
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        33-INCH Tire
      </Text>
      <Text style={styles.text}>Description</Text>
      <Text style={{ marginHorizontal: 15 }}>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // centers dots
    backgroundColor: "#E9E9E9",
  },

  image: {
    borderRadius: 16,
  },

  dotsContainer: {
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 10,
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
    marginLeft: 10,
    marginBottom: 25,
  },
});
