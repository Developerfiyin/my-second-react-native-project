import Ionicons from "@expo/vector-icons/Ionicons";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.view1}
        source={require("../../assets/images/home.png")}
      >
        <View style={styles.view2}>
          <Text style={styles.emeka}>Welcome Emeka,</Text>
          <Ionicons
            name="notifications"
            size={30}
            color="black"
            style={styles.icons}
          />
        </View>

        <View style={styles.wrapper}>
          {/* Input container */}
          <View style={styles.inputContainer}>
            <Ionicons name="search" size={20} color="#9CA3AF" />

            <TextInput placeholder="Search" style={styles.input} />
          </View>

          {/* Notification icon (outside input) */}
          <Pressable style={styles.iconButton}>
            <Ionicons name="options-outline" size={22} />
          </Pressable>
        </View>
      </ImageBackground>

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
    color: "white",
    fontWeight: "bold",
    marginTop: "10%",
  },
  view1: {
    width: "100%",
    height: "50%",
    borderRadius: 10,
    backgroundColor: "rgba(2, 5, 48, 0.94)",
  },
  view2: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },

  icons: {
    backgroundColor: "white",
    padding: 9,
    borderRadius: 10,
    marginLeft: "35%",
    marginTop: "10%",
    alignContent: "center",
  },

  wrapper: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 12,
  },

  inputContainer: {
    flex: 1, // takes remaining width
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 12,

    height: 48,
  },

  input: {
    flex: 1, // 👈 allows typing space
    marginLeft: 8,
    fontSize: 16,
  },

  iconButton: {
    padding: 10,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
  },
});
