import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.emeka}>Welcome Emeka,</Text>
      </View>

      {/* THE SECOND VIEW */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  emeka: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: "7%",
    marginTop: "10%",
  },
});
