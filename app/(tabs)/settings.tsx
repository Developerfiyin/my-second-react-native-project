import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";

export default function ProfilePage() {
  return (
    <View style={styles.View}>
      <FontAwesome
        name="question-circle-o"
        size={24}
        color="black"
        style={styles.font}
      />

      <Text
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 10,
          fontSize: 30,
        }}
      >
        Nick Jonas
      </Text>
      <Text style={{ fontSize: 15, textAlign: "center", fontWeight: "500" }}>
        nickjonas@gmail.com
      </Text>
      <Text style={{ textAlign: "left", padding: 20, fontSize: 18 }}>
        Account
      </Text>

      <View style={styles.account}>
        <FontAwesome5 name="user-circle" size={30} color="black" />
        <Text style={styles.text}>Profile Information</Text>
        <Feather name="arrow-right" size={30} color="black" />
      </View>

      <View style={styles.account}>
        <Fontisto name="locked" size={30} color="black" />
        <Text style={styles.text}>Password & Security</Text>
        <Feather name="arrow-right" size={30} color="black" />
      </View>

      <View style={styles.account}>
        <MaterialCommunityIcons name="bell-outline" size={30} color="black" />
        <Text style={styles.text}>Notification</Text>
        <Feather name="arrow-right" size={30} color="black" />
      </View>

      <View style={styles.account}>
        <AntDesign name="global" size={30} color="black" />
        <Text style={styles.text}>Language</Text>
        <Feather name="arrow-right" size={30} color="black" />
      </View>

      <View style={styles.account}>
        <MaterialCommunityIcons
          name="information-variant-circle-outline"
          size={30}
          color="black"
        />
        <Text style={styles.text}>About Us</Text>
        <Feather name="arrow-right" size={30} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#e9e9e9e9",
    width: "100%",
    height: "100%",
  },
  font: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    marginRight: 20,
    marginHorizontal: "auto",
    marginTop: 30,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "center",
  },
  account: {
    width: "90%",
    borderRadius: 10,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    gap: 5,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#d3d3d3",
    marginHorizontal: "auto",
    marginBottom: 1,
  },
});
