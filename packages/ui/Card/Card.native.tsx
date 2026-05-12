import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? theme.colors.disabled
            : theme.colors.primary,
        },
      ]}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, { color: theme.colors.text }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});