import useTheme from "@/hooks/useTheme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SettingsScreen = () => {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>
    </View>
  );
};

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
});

export default SettingsScreen;
