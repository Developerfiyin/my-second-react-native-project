import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Get the best service needed for your car here
      </Text>
      <Image
        source={require("../assets/images/first-screen.png")}
        style={styles.image}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1729",
  },
  image: {
    width: 392,
    height: 479,
    opacity: 1,
    top: 87,
    marginLeft: "auto",
    resizeMode: "contain",
  },
  text: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "600",
    marginTop: 40,
    marginHorizontal: 20,
  },
});

{
  /* height: 320,
    resizeMode: "contain",
    marginTop: 50,
    marginLeft: "auto",*/
}
