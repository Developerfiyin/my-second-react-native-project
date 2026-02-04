import { StyleSheet, Text, TextInput, View } from "react-native";

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

      <View style={styles.View}>
        <Text style={styles.text} accessibilityLabel="Email">
          MAKE
        </Text>
        <TextInput
          placeholder="e.g Tesla"
          style={styles.input}
          accessibilityLabel="Email"
        ></TextInput>
      </View>

      <View style={styles.View}>
        <Text style={styles.text} accessibilityLabel="Email">
          MAKE
        </Text>
        <TextInput
          placeholder="e.g Tesla"
          style={styles.input}
          accessibilityLabel="Email"
        ></TextInput>
      </View>
      <View style={styles.View}>
        <Text style={styles.text} accessibilityLabel="Email">
          MAKE
        </Text>
        <TextInput
          placeholder="e.g Tesla"
          style={styles.input}
          accessibilityLabel="Email"
        ></TextInput>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginHorizontal: 20,
    color: "grey",
    fontWeight: "400",
  },
  View: {
    marginHorizontal: 20,
    gap: 10,
    marginVertical: 20,
  },
  input: {
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#E8E8E8",
    paddingLeft: 20,
    padding: 20,
  },
});
