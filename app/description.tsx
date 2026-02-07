import { Image, StyleSheet, View } from "react-native";
export default function Description() {
  return (
    <View style={{ flexDirection: "column", gap: "10" }}>
      <View style={{ backgroundColor: "#E8E8E8" }}>
        <Image
          source={require("../assets/images/image 20.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
});
