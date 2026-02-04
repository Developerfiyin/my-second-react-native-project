import { StyleSheet, Text, View } from "react-native";

export default function VehicleDetails() {
  return (
    <View
      style={{
        flexDirection: "column",
        marginTop: 20,
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 18, color: "#0F172A" }}>
        Help us match the right tires for your car
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 18,
  },
});
