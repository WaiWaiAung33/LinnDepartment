import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#0092FF", "#0029F9"]}
          style={{
            width: "100%",
            height: "100%"
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View style={styles.secondConatiner}>
            <Text style={[styles.text, { fontSize: 20 }]}>Sign Up !</Text>

            <View style={styles.thirdContainer}>
              <TextInput
                placeholder="Username"
                placeholderTextColor="#00FF80"
                style={styles.textInput}
              />
            </View>

            <View style={styles.thirdContainer}>
              <TextInput
                placeholder="Phone No:"
                placeholderTextColor="#00FF80"
                style={styles.textInput}
              />
            </View>

            <View style={styles.thirdContainer}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#00FF80"
                style={styles.textInput}
              />
            </View>
            <View style={styles.thirdContainer}>
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#00FF80"
                style={styles.textInput}
              />
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("login")}
              style={styles.touchBtn}
            >
              <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  secondConatiner: {
    flex: 1,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 60
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 30
  },
  thirdContainer: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#00FF80",
    borderStyle: "solid",
    marginTop: 20,
    borderRadius: 5
  },
  img: {
    width: 40,
    height: 40
  },
  textInput: {
    marginLeft: 20,
    fontSize: 15
  },
  touchBtn: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#00FF80",
    borderStyle: "solid",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  text: {
    color: "#00FF80",
    fontSize: 15
  },
  textBottom: {
    textAlign: "center",
    color: "#00FF80",
    fontSize: 15
  }
});
