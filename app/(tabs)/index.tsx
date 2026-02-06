import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.view1}
        source={require("../../assets/images/home.png")}
      >
        <View
          style={{
            width: "100%",
            borderRadius: 10,
          }}
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
            <Pressable
              onPress={() => router.push("/search")}
              style={styles.inputContainer}
            >
              {/* Input container */}

              <Ionicons
                name="search"
                size={20}
                color="#9CA3AF"
                style={{ marginTop: 20 }}
              />

              <Text style={styles.input}> Search Service...</Text>
            </Pressable>
            {/* Option icon (outside input) */}
            <Pressable style={styles.iconButton}>
              <Ionicons name="options-outline" size={30} />
            </Pressable>
          </View>
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
            <Link
              href={"/Map"}
              style={{ color: "white", fontSize: 16, textAlign: "center" }}
            >
              See Offer
            </Link>
          </Pressable>
        </View>

        <Image
          source={require("../../assets/images/Frame1.png")}
          style={{ width: "40%", height: "100%" }}
        />
      </View>
      {/*The div with somall 4 views*/}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          marginHorizontal: "auto",
          marginTop: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#0F172A",
            width: 8,
            height: 8,
            borderRadius: "100%",
          }}
        ></View>

        <View
          style={{
            backgroundColor: "#D9D9D9",
            width: 8,
            height: 8,
            borderRadius: "100%",
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#D9D9D9",
            width: 8,
            height: 8,
            borderRadius: "100%",
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#D9D9D9",
            width: 8,
            height: 8,
            borderRadius: "100%",
          }}
        ></View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginBottom: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600", color: "#0F172A" }}>
          Services
        </Text>
        <Link href={"/service"} style={{ color: "#0F172A" }}>
          See All
        </Link>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <View>
          <MaterialCommunityIcons
            name="car-wash"
            size={49}
            color="black"
            style={styles.icon}
          />
          <Text style={{ color: "#0F172A" }}> Car Wash</Text>
        </View>

        <View>
          <MaterialCommunityIcons
            name="tools"
            size={49}
            color="black"
            style={styles.icon}
          />
          <Text style={{ color: "#0F172A" }}>Tools</Text>
        </View>

        <View>
          <MaterialCommunityIcons
            name="pump"
            size={49}
            color="black"
            style={styles.icon}
          />
          <Text style={{ color: "#0F172A" }}> Car Main...</Text>
        </View>

        <View>
          <FontAwesome5
            name="coins"
            size={49}
            color="black"
            style={styles.icon}
          />
          <Text style={{ color: "#0F172A" }}> Change Tyres</Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600", color: "#0F172A" }}>
          Services Providers
        </Text>
        <Link href={"/Providers"} style={{ color: "#0F172A" }}>
          See All
        </Link>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <View>
          <Image
            source={require("../../assets/images/image 15.png")}
            style={styles.icon}
          />
          <Text style={{ color: "#0F172A" }}> Car Wash</Text>
        </View>

        <View>
          <Image
            source={require("../../assets/images/image 16.png")}
            style={styles.icon}
          />
          <Text style={{ color: "#0F172A" }}>Tools</Text>
        </View>

        <View>
          <Image source={require("../../assets/images/image 14.png")} />
          <Text style={{ color: "#0F172A" }}> Car Main...</Text>
        </View>

        <View>
          <Image
            source={require("../../assets/images/image 15.png")}
            style={styles.icon}
          />
          <Text style={{ color: "#0F172A" }}> Change Tyres</Text>
        </View>
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
    height: 260,
    backgroundColor: "#0F1729",
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
    marginHorizontal: 30,
    gap: 12,
  },

  inputContainer: {
    flex: 1, // takes remaining width
    flexDirection: "row",
    gap: 30,

    backgroundColor: "#E8E8E8",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 59,
  },

  input: {
    flex: 1, //  allows typing space
    marginLeft: 19,
    fontSize: 18,
    textAlign: "left",
    marginTop: 15,
    color: "#F3FF4F6",
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
  icon: {
    backgroundColor: "#d9d9dd",
    padding: 10,
    borderRadius: 100,
    alignSelf: "center",
  },
});
