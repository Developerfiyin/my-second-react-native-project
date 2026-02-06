import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PaymentMethod() {
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
          textAlign: "left",
          padding: 20,
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        See your payment method
      </Text>

      <Text
        style={{
          textAlign: "left",
          padding: 20,
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        Pay through any of these means
      </Text>

      <Pressable style={styles.account} onPress={() => router.push("/account")}>
        <FontAwesome5 name="user-circle" size={30} color="black" />
        <Text style={styles.text}>Paypal</Text>
        <Feather name="arrow-right" size={30} color="black" />
      </Pressable>

      <View style={styles.account}>
        <Fontisto name="locked" size={30} color="black" />
        <Text style={styles.text}>Credit Card</Text>
        <Feather name="arrow-right" size={30} color="black" />
      </View>

      <View style={styles.account}>
        <MaterialCommunityIcons name="bell-outline" size={30} color="black" />
        <Text style={styles.text}>Apple Pay</Text>
        <Feather name="arrow-right" size={30} color="black" />
      </View>

      <View style={styles.account}>
        <AntDesign name="global" size={30} color="black" />
        <Text style={styles.text}>Google Pay</Text>
        <Feather name="arrow-right" size={30} color="black" />
      </View>

      <View style={styles.account}>
        <Feather name="log-out" size={30} color="black" />
        <Text style={styles.text}>Wise</Text>
        <Feather name="arrow-right" size={30} color="black" />
      </View>

      <Text
        style={{
          textAlign: "left",
          padding: 20,
          fontSize: 18,
          fontWeight: "500",
        }}
      >
        Webmoney
      </Text>

      <View style={styles.account}>
        <MaterialCommunityIcons
          name="vector-triangle"
          size={30}
          color="black"
        />
        <Text style={styles.text}>Webmoney</Text>
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
