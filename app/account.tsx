import { Image, StyleSheet, Text, View } from "react-native";

export default function AccountScreen() {
  return (
    <View style={{ flexDirection: "column", gap: 20 }}>
      <Image
        source={require("../assets/images/image 32.png")}
        style={{ marginHorizontal: "auto", marginTop: 50 }}
      />

      <View style={styles.View}>
        <Text style={{ color: "grey", fontSize: 18 }}> Username</Text>
        <Text style={{ color: "#0F172A", fontSize: 20 }}>Emeka Orji</Text>
      </View>

      <View style={styles.View}>
        <Text style={{ color: "grey", fontSize: 18 }}> Email</Text>
        <Text style={{ color: "#0F172A", fontSize: 20 }}>
          livinglogos@gmail.com
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  View: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "lightgrey",
    paddingBottom: "6%",
    borderBottomWidth: 2,
    marginHorizontal: 25,
  },
});
