import {
  View,
  Text,
  Animated,
  StyleSheet,
  useAnimatedValue,
} from "react-native";
import React, { useEffect } from "react";

const FadeInView = () => {
  const progress = useAnimatedValue(0.5);
  const scale = useAnimatedValue(1);

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        //runs multiple animations in parallel
        Animated.sequence([
          //runs animations in order, one after the other.
          Animated.timing(progress, {
            toValue: 1,
            useNativeDriver: true,
          }),
          Animated.timing(progress, {
            toValue: 0.5,
            useNativeDriver: true,
          }),
        ]),

        Animated.sequence([
          Animated.timing(scale, {
            toValue: 2,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            useNativeDriver: true,
          }),
        ]),
      ]),
      { iterations: 3 }
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.squareBox,
        {
          borderRadius: progress.interpolate({
            inputRange: [0.5, 1],
            outputRange: [size / 4, size / 2],
          }),
          opacity: progress,
          transform: [
            { scale },
            {
              rotate: progress.interpolate({
                inputRange: [0.5, 1],
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
