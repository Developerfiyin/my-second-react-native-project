import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
export default function SignupScreen() {
  return (
    <View>
      <View style={styles.wrapper}>
        {/* Input container */}
        <View style={styles.inputContainer}>
          <Feather name="user" size={24} color="grey" />
          <TextInput
            placeholder="Username"
            style={styles.input}
            keyboardType="default"
            autoFocus
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="mail" size={30} color="grey" />
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            autoFocus
          />
        </View>

        <View style={styles.inputContainer}>
          <Octicons name="key" size={30} color="grey" />
          <TextInput
            placeholder="Password"
            style={styles.input}
            keyboardType="phone-pad"
            autoFocus
          />
        </View>

        <View style={styles.inputContainer}>
          <Octicons name="key" size={30} color="grey" />
          <TextInput
            placeholder=" Confirm Password"
            style={styles.input}
            keyboardType="phone-pad"
            autoFocus
          />
        </View>

        <View style={styles.inputContainer}>
          <FontAwesome name="phone" size={30} color="grey" />
          <TextInput
            placeholder="Phone number"
            style={styles.input}
            keyboardType="numeric"
            autoFocus
          />
        </View>

        <Pressable style={styles.pressable} onPress={() => router.push("/")}>
          <Text style={styles.text1}> Sign Up</Text>
        </Pressable>
        <Text style={styles.text2}> Or</Text>
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
    marginHorizontal: 20,
    gap: 12,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e8e8e8",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 90,
    top: 40,
    columnGap: 20,
  },

  input: {
    flex: 1, //  allows typing space
    marginLeft: 8,
    fontSize: 16,
  },
  pressable: {
    backgroundColor: "#0f172a",
    padding: 20,
    borderRadius: 10,
    marginTop: 90,
    width: "100%",
  },
  text1: {
    color: "#ffff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  text2: {
    textAlign: "center",

    borderLeftWidth: 10,
    borderRightWidth: 10,
    
  },
});
