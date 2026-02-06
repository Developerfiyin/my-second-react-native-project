import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, router } from "expo-router";
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function searchInput() {
  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Link href={"/ervice"} style={{ right: "15%" }}>
          <FontAwesome5 name="long-arrow-alt-left" size={34} color="black" />
        </Link>
        <Text style={{ fontSize: 25, fontWeight: "500" }}>See Tyres</Text>
      </View>

      <View style={styles.wrapper}>
        {/* Input container */}
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={20} color="#9CA3AF" />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
      </View>

      <Pressable
        onPress={() => router.push("/profile")}
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      >
        <View style={styles.image}>
          <Image
            source={require("../assets/images/image 20.png")}
            style={{ width: 96, height: 99 }}
          />
        </View>

        <View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />

            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
          </View>

          <Text style={styles.text}>Terra former Tractor 2021</Text>
          <Text style={styles.text}>$240.00</Text>
        </View>
      </Pressable>

      <View style={styles.card}>
        <Image
          source={require("../assets/images/image 19.png")}
          style={{
            width: 103,
            height: 96,
            opacity: 1,
            padding: 20,
            backgroundColor: "#D1D7E8",
            borderRadius: 10,
          }}
        />
        <View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="grey" />
            <Ionicons name="star" size={24} color="grey" />
          </View>
          <Text style={styles.text}>Terra Former Tractor 2018</Text>
          <Text style={styles.text}>$170.00</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.image}>
          <Image
            source={require("../assets/images/image 21.png")}
            style={{
              width: 96,
              height: 90,
              marginHorizontal: 10,
            }}
          />
        </View>

        <View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="grey" />
          </View>
          <Text style={styles.text}>Terra Former Tractor 2023</Text>
          <Text style={styles.text}>$200.00</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.image}>
          <Image
            source={require("../assets/images/image 22.png")}
            style={{
              marginHorizontal: 10,
            }}
          />
        </View>

        <View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
          </View>
          <Text style={styles.text}>Terra Former Tractor 2025</Text>
          <Text style={styles.text}> $1000.00</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.image}>
          <Image
            source={require("../assets/images/image 22.png")}
            style={{
              marginHorizontal: 10,
            }}
          />
        </View>

        <View>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
            <Ionicons name="star" size={24} color="gold" />
          </View>
          <Text style={styles.text}>Terra Former Tractor 2025</Text>
          <Text style={styles.text}> $1000.00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "#e8e8e8",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
  },

  input: {
    flex: 1, //  allows typing space
    marginLeft: 8,
    fontSize: 16,
  },
  card: {
    flexDirection: "row",

    alignItems: "center",
    padding: "auto",
    backgroundColor: "#E9E9E9",
    marginTop: 20,
    marginHorizontal: 20,
    gap: 20,
    borderRadius: 12,
    marginBottom: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: "#0F172A",
  },
  image: {
    opacity: 1,
    marginTop: 0,
    borderRadius: 10,
    backgroundColor: "#D1D7E4",
  },
});
