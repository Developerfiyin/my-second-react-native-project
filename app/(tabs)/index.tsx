import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Image,
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
            <Ionicons name="options-outline" size={30} />
          </Pressable>
        </View>
      </ImageBackground>

      {/* THE SECOND VIEW */}

      <View
        style={{
          marginTop: "13%",
          gap: 12,
          backgroundColor: "lightgrey",
          paddingLeft: 10,
          borderRadius: 18,
          display: "flex",
          height: 220,
          justifyContent: "space-between",
          flexDirection: "row",
          overflow: "hidden",
          marginHorizontal: 30,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            paddingVertical: 20,
          }}
        >
          <Text style={styles.text1}>
            Professional Tire {"\n"}
            Service at your {"\n"}
            Doorstep
          </Text>

          <Pressable
            style={{
              padding: 8,
              width: 200,
              marginTop: 10,
              borderRadius: 100,
              marginRight: 30,
              backgroundColor: "rgba(4, 7, 48, 0.94)",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
              See Offer
            </Text>
          </Pressable>
        </View>

        <Image
          source={require("../../assets/images/Frame1.png")}
          style={{ width: "40%", height: "100%" }}
        />
      </View>
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
    height: "40%",
    borderRadius: 10,
    backgroundColor: "rgba(4, 7, 48, 0.94)",
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
    marginTop: 40,
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
    flex: 1, //  allows typing space
    marginLeft: 8,
    fontSize: 16,
  },

  iconButton: {
    padding: 10,
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
  },
  text1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "rgba(4, 7, 48, 0.94)",
    paddingHorizontal: 10,
  },
});
