import {
  View,
  Text,
  Animated,
  StyleSheet,
  useAnimatedValue,
  Easing,
} from "react-native";
import React, { useEffect } from "react";

const FadeInView = () => {
  const progress = useAnimatedValue(0.5);
  const scale = useAnimatedValue(1);

  useEffect(() => {
    Animated.loop(
      //loops the content inside
      Animated.parallel([
        //runs multiple animations in parallel
        Animated.sequence([
          //runs animations in order, one after the other.
          Animated.timing(progress, {
            toValue: 1,
            easing: Easing.bounce,
            useNativeDriver: true,
          }),
          Animated.timing(progress, {
            toValue: 0.5,
            easing: Easing.bounce,
            useNativeDriver: true,
          }),
        ]),

        Animated.sequence([
          Animated.timing(scale, {
            toValue: 2,
            useNativeDriver: true,
            easing: Easing.bounce,
          }),
          Animated.timing(scale, {
            toValue: 1,
            easing: Easing.bounce,
            useNativeDriver: true,
          }),
        ]),
      ])
      // ,{ iterations: 3 }
    ).start();
  }, []);

  return (
    <View>
      <Animated.View
        style={[
          styles.redsquareBox,
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
      <Animated.View
        style={[
          styles.pinksquareBox,
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
      <Animated.View
        style={[
          styles.greensquareBox,
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
      <Animated.View
        style={[
          styles.bluesquareBox,
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
      <Animated.View
        style={[
          styles.yellowsquareBox,
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

      <Animated.View
        style={[
          styles.greensquareBox,
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
      <Animated.View
        style={[
          styles.pinksquareBox,
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
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <FadeInView />
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
  bluesquareBox: {
    width: size,
    height: size,
    backgroundColor: "rgba(0,0,256,0.5)",
    borderRadius: 50,
  },
  yellowsquareBox: {
    width: size,
    height: size,
    backgroundColor: "yellow",
    borderRadius: 50,
  },

  greensquareBox: {
    width: size,
    height: size,
    backgroundColor: "green",
    borderRadius: 50,
  },
  pinksquareBox: {
    width: size,
    height: size,
    backgroundColor: "pink",
    borderRadius: 50,
  },
  redsquareBox: {
    width: size,
    height: size,
    backgroundColor: "red",
    borderRadius: 50,
  },
});
