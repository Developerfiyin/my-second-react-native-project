import { Image, StyleSheet, View } from "react-native";

export default function Profiescreen() {
  return (
    <View style={{ flexDirection: "column", gap: 20 }}>
      <Image
        source={require("../assets/images/image 32.png")}
        style={{ marginHorizontal: "auto", marginTop: 50 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
