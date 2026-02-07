import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, TextInput, View } from "react-native";

export default function SignupScreen() {
  return (
    <View>
      <View style={styles.wrapper}>
        {/* Input container */}
        <View style={styles.inputContainer}>
          <Feather name="user" size={24} color="grey" />
          <TextInput placeholder="Username" style={styles.input} autoFocus />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="mail" size={30} color="grey" />
          <TextInput placeholder="Username" style={styles.input} autoFocus />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    height: 170,
    backgroundColor: "#ffff",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 12,
  },

  inputContainer: {
    flex: 1, // takes remaining width
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e8e8e8",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 79,
    top: 40,
    gap: 20,
    columnGap: 20,
  },

  input: {
    flex: 1, //  allows typing space
    marginLeft: 8,
    fontSize: 16,
  },
});
