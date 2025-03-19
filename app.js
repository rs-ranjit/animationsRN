import React, { useEffect } from "react";
import { View, Animated, StyleSheet, Easing } from "react-native";

const TranslateExample = () => {
  const translateX = new Animated.Value(0); // Animated value for the X-axis
  const translateY = new Animated.Value(0); // Animated value for the Y-axis

  useEffect(() => {
    // Start the translation animation
    Animated.timing(translateX, {
      toValue: 200, // Translate along X-axis by 200 units
      duration: 1000, // Duration of 1 second
      easing: Easing.ease, // Ease in-out animation
      useNativeDriver: true, // Use native driver for performance
    }).start();

    Animated.timing(translateY, {
      toValue: 300, // Translate along Y-axis by 300 units
      duration: 1000, // Duration of 1 second
      easing: Easing.ease, // Ease in-out animation
      useNativeDriver: true, // Use native driver for performance
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [
              { translateX }, // Apply X translation
              { translateY }, // Apply Y translation
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    borderRadius: 50, // Circle shape
  },
});

export default TranslateExample;
