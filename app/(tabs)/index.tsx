import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Text>Hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text style={styles.tombol}>Toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  content: {
    fontSize: 20,
  },
  tombol: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    color: "white",
  },
});
