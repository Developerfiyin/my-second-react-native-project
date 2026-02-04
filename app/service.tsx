import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function ServiceScreen() {
  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
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
        <Text style={{ fontSize: 25, fontWeight: "500" }}>
          See Available Services
        </Text>
      </View>

      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          marginHorizontal: 20,
        }}
      >
        Receive all manner of services from the comfort of your home.
      </Text>

      <View>
        <View
          style={{
            backgroundColor: "#E8E8E8",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            padding: 13,
            borderRadius: 10,
            borderColor: "#ffff",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <MaterialCommunityIcons
            name="car-wash"
            size={40}
            color="black"
            style={styles.icon}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 50,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Puncture Repair
            </Text>
            <Text style={{ color: "#0F172A" }}> Car Wash</Text>
          </View>
          <Text style={{ fontSize: 30, color: "#0F172A", fontWeight: "500" }}>
            $56
          </Text>
        </View>
      </View>

      <View>
        <View
          style={{
            backgroundColor: "#E8E8E8",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            padding: 13,
            borderRadius: 10,
            borderColor: "#ffff",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <MaterialCommunityIcons
            name="car-wash"
            size={40}
            color="black"
            style={styles.icon}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 50,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Puncture Repair
            </Text>
            <Text style={{ color: "#0F172A" }}> Car Wash</Text>
          </View>
          <Text style={{ fontSize: 30, color: "#0F172A", fontWeight: "500" }}>
            $56
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            backgroundColor: "#E8E8E8",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            padding: 13,
            borderRadius: 10,
            borderColor: "#ffff",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <MaterialCommunityIcons
            name="car-wash"
            size={40}
            color="black"
            style={styles.icon}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 50,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Puncture Repair
            </Text>
            <Text style={{ color: "#0F172A" }}> Car Wash</Text>
          </View>
          <Text style={{ fontSize: 30, color: "#0F172A", fontWeight: "500" }}>
            $56
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            backgroundColor: "#E8E8E8",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            padding: 13,
            borderRadius: 10,
            borderColor: "#ffff",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <MaterialCommunityIcons
            name="car-wash"
            size={40}
            color="black"
            style={styles.icon}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 50,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Puncture Repair
            </Text>
            <Text style={{ color: "#0F172A" }}> Car Wash</Text>
          </View>
          <Text style={{ fontSize: 30, color: "#0F172A", fontWeight: "500" }}>
            $56
          </Text>
        </View>
      </View>

      <View>
        <View
          style={{
            backgroundColor: "#E8E8E8",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            padding: 13,
            borderRadius: 10,
            borderColor: "#ffff",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <MaterialCommunityIcons
            name="car-wash"
            size={40}
            color="black"
            style={styles.icon}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: 50,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Puncture Repair
            </Text>
            <Text style={{ color: "#0F172A" }}> Car Wash</Text>
          </View>
          <Text style={{ fontSize: 30, color: "#0F172A", fontWeight: "500" }}>
            $56
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "#bcc9e6",
    padding: 20,
    borderRadius: 15,
    alignSelf: "center",
  },
});
