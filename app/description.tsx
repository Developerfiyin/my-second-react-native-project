import { Image, StyleSheet, View } from "react-native";
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
    gap: 8,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
  },

  activeDot: {
    backgroundColor: "#2563EB",
  },
});
