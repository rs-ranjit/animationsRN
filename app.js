import {
  View,
  Text,
  Animated,
  StyleSheet,
  useAnimatedValue,
} from "react-native";
import React, { useEffect } from "react";

const FadeInView = () => {
  const progress = useAnimatedValue(0);
  const scale = useAnimatedValue(1);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
    Animated.timing(scale, {
      toValue: 2,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.squareBox,
        {
          borderRadius: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [size / 4, size / 2],
          }),
          opacity: progress,
          transform: [
            { scale },
            {
              rotate: progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["180deg", "360deg"],
              }),
            },
          ],
        },
      ]}
    ></Animated.View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <FadeInView />
      <View style={[styles.squareBox, { marginTop: 100 }]}>
        <Text>helo</Text>
      </View>
    </View>
  );
};

const size = 100;

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  squareBox: {
    width: size,
    height: size,
    backgroundColor: "rgba(0,0,256,0.5)",
  },
});
