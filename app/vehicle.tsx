import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

const YEARS = ["2026", "2025", "2024", "2023", "2022", "2021", "2020"];

export default function VehicleDetails() {
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState<string | null>(null);

  return (
    <View
      style={{
        flexDirection: "column",
        marginTop: 20,
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 18, color: "#0F172A" }}>
        Help us match the right tires for your car
      </Text>

      <View style={styles.View}>
        <Text style={styles.text} accessibilityLabel="Email">
          MAKE
        </Text>
        <TextInput
          placeholder="e.g   Tesla"
          style={styles.input}
          accessibilityLabel="Email"
        ></TextInput>
      </View>

      <View style={styles.View}>
        <Text style={styles.text} accessibilityLabel="Email">
          MODEL
        </Text>
        <TextInput
          placeholder=" Model  3"
          style={styles.input}
          accessibilityLabel="Email"
        ></TextInput>
      </View>

      <View style={styles.container}>
        {/* Label */}
        <Text style={styles.label}>Year</Text>

        {/* Input-like field */}
        <Pressable style={styles.selectBox} onPress={() => setOpen(true)}>
          <Text style={[styles.value, year && styles.selectedValue]}>
            {year || "Select year"}
          </Text>

          <Ionicons name="chevron-down" size={20} color="#9CA3AF" />
        </Pressable>

        {/* Dropdown */}
        <Modal visible={open} transparent animationType="fade">
          <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
            <View style={styles.dropdown}>
              {YEARS.map((item) => (
                <Pressable
                  key={item}
                  style={styles.option}
                  onPress={() => {
                    setYear(item);
                    setOpen(false);
                  }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </Pressable>
              ))}
            </View>
          </Pressable>
        </Modal>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginHorizontal: 20,
    color: "grey",
    fontWeight: "400",
  },
  View: {
    marginHorizontal: 20,
    gap: 10,
    marginVertical: 20,
  },
  input: {
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#E8E8E8",
    paddingLeft: 20,
    padding: 20,
  },
  container: {
    marginBottom: 20,
  },

  label: {
    fontSize: 18,
    marginHorizontal: 40,
    color: "#6B7280",
    marginBottom: 6,
    fontWeight: "400",
  },

  selectBox: {
    height: 70,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#E8E8E8", // matches image
    marginHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  value: {
    fontSize: 18,
    color: "#9CA3AF", // placeholder color
    marginHorizontal: 20,
  },

  selectedValue: {
    color: "#09071b",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    padding: 20,
  },

  dropdown: {
    backgroundColor: "#0F172A",
    borderRadius: 10,
    overflow: "hidden",
  },

  option: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  optionText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "400",
  },
});
