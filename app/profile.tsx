import { Image, StyleSheet, Text, View } from "react-native";

export default function Profiescreen() {
  return (
    <View style={{ flexDirection: "column", gap: 20 }}>
      <Image
        source={require("../assets/images/image 32.png")}
        style={{ marginHorizontal: "auto", marginTop: 50 }}
      />

      <View style={styles.View}>
        <Text style={{ color: "grey" }}> Username</Text>
        <Text style={{ color: "#0F172A" }}>Emeka Orji</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  View: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "grey",
    paddingBottom: 10,
    marginHorizontal: 15,
  },
});
