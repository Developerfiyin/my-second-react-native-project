import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Link } from "expo-router";
import { Text, View } from "react-native";
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
    </View>
  );
}
