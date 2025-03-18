import { useEffect, useRef } from "react";
import { Animated, StyleSheet, View, Text } from "react-native";

export default function App() {
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.spring(progress, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true,
          }),

          Animated.spring(progress, {
            toValue: 0.5,
            duration: 10000,
            useNativeDriver: true,
          }),
        ]),

        Animated.sequence([
          Animated.spring(scale, {
            toValue: 2,
            duration: 10000,
            useNativeDriver: true,
          }),

          Animated.spring(scale, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true,
          }),
        ]),
      ]),
      { iterations: 3 }
    ).start();

    // Animated.spring(scale, {
    //   toValue: 2,
    //   duration: 10000,
    //   useNativeDriver: true,
    // }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            borderRadius: progress.interpolate({
              inputRange: [0.5, 1],
              outputRange: [(0.5 * SIZE) / 2, (1 * SIZE) / 2],
            }),
            opacity: progress,
            transform: [
              { scale },
              {
                rotate: progress.interpolate({
                  inputRange: [0.5, 1],
                  outputRange: ["180deg", "360deg"], // Use 'deg' for degrees
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
}
const SIZE = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "rgba(0,0,256,0.5)",
  },
});
