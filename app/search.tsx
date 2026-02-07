import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import {
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function searchInput() {
  return (
    <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <ImageBackground
        source={require(".././assets/images/image 23.png")}
        style={styles.wrapper}
        resizeMode="cover"
      >
        <View style={styles.overlay} />

        {/* Input container */}
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={20} color="#9CA3AF" />
          <TextInput placeholder="Search" style={styles.input} autoFocus />
        </View>

        <Pressable
          style={styles.iconButton}
          onPress={() => router.push("/description")}
        >
          <Ionicons name="options-outline" size={30} />
        </Pressable>
      </ImageBackground>

      <Pressable
        onPress={() => router.push("/description")}
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
            <Ionicons name="star" size={24} color="#D1D7E4" />
            <Ionicons name="star" size={24} color="#D1D7E4" />
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
            <Ionicons name="star" size={24} color="#D1D7E8" />
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
            <Ionicons name="star" size={24} color="#D1D7E4" />
          </View>
          <Text style={styles.text}>Terra Former Tractor 2023</Text>
          <Text style={styles.text}>$200.00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    height: 170,
    backgroundColor: "#0F1729",
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
  iconButton: {
    padding: 10,
    backgroundColor: "#D1D7E4",
    borderRadius: 12,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(2, 2, 19, 0.53)", // blue overlay
  },
});
