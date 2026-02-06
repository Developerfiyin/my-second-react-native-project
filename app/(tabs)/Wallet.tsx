import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

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
        <Image source={require("../../assets/images/paypal.png")} />
        <Text style={styles.text}>Paypal</Text>
        <FontAwesome6 name="circle-dot" size={24} color="grey" />
      </Pressable>

      <View style={styles.account}>
        <Image source={require("../../assets/images/Group 15.png")} />

        <Text style={styles.text}>Credit Card</Text>
        <FontAwesome6 name="circle-dot" size={24} color="grey" />
      </View>

      <View style={styles.account}>
        <Image source={require("../../assets/images/apple.png")} />

        <Text style={styles.text}>Apple Pay</Text>
        <FontAwesome6 name="circle-dot" size={24} color="grey" />
      </View>

      <View style={styles.account}>
        <Image source={require("../../assets/images/google.png")} />
        <Text style={styles.text}>Google Pay</Text>
        <FontAwesome6 name="circle-dot" size={24} color="grey" />
      </View>

      <View style={styles.account}>
        <Image source={require("../../assets/images/wise.png")} />

        <Text style={styles.text}>Wise</Text>
        <FontAwesome6 name="circle-dot" size={24} color="grey" />
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
        <Image source={require("../../assets/images/webmoney.png")} />

        <Text style={styles.text}>Webmoney</Text>
        <FontAwesome6 name="circle-dot" size={24} color="grey" />
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
