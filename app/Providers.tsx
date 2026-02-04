import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
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

export default function Provider() {
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
        <Link href={"/(tabs)"} style={{ right: "15%" }}>
          <FontAwesome5 name="long-arrow-alt-left" size={34} color="black" />
        </Link>
        <Text style={{ fontSize: 25, fontWeight: "500" }}>See Technicians</Text>
      </View>

      <View style={styles.wrapper}>
        {/* Input container */}
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={20} color="#9CA3AF" />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
      </View>

      <Pressable
        onPress={() => router.push("/details")}
        style={({ pressed }) => [styles.card, pressed && styles.pressed]}
      >
        <Image source={require("../assets/images/image 14.png")} />
        <View>
          <Text>Oladele Micheal</Text>
          <Text>Lekki Phase 1, Lagos</Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="star" size={24} color="black" />
            <Text>4.8</Text>
            <Ionicons name="time-outline" size={24} color="black" />
            <Text>5 min</Text>
          </View>
        </View>
      </Pressable>

      <View style={styles.card}>
        <Image source={require("../assets/images/image 14.png")} />
        <View>
          <Text>Williams Shakespare</Text>
          <Text>Los Angeles</Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="star" size={24} color="black" />
            <Text>4.8</Text>
            <Ionicons name="time-outline" size={24} color="black" />
            <Text>5 min</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require("../assets/images/image 14.png")} />
        <View>
          <Text>Williams Shakespare</Text>
          <Text>Los Angeles</Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="star" size={24} color="black" />
            <Text>4.8</Text>
            <Ionicons name="time-outline" size={24} color="black" />
            <Text>5 min</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require("../assets/images/image 14.png")} />
        <View>
          <Text>Williams Shakespare</Text>
          <Text>Los Angeles</Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="star" size={24} color="black" />
            <Text>4.8</Text>
            <Ionicons name="time-outline" size={24} color="black" />
            <Text>5 min</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require("../assets/images/image 14.png")} />
        <View>
          <Text>Williams Shakespare</Text>
          <Text>Los Angeles</Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="star" size={24} color="black" />
            <Text>4.8</Text>
            <Ionicons name="time-outline" size={24} color="black" />
            <Text>5 min</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require("../assets/images/image 14.png")} />
        <View>
          <Text>Williams Shakespare</Text>
          <Text>Los Angeles</Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="star" size={24} color="black" />
            <Text>4.8</Text>
            <Ionicons name="time-outline" size={24} color="black" />
            <Text>5 min</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require("../assets/images/image 14.png")} />
        <View>
          <Text>Oladele Micheal</Text>
          <Text>Lekki Phase 1, Lagos</Text>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons name="star" size={24} color="black" />
            <Text>4.8</Text>
            <Ionicons name="time-outline" size={24} color="black" />
            <Text>5 min</Text>
          </View>
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
    padding: 16,
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
});
