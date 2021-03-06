import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class EditDepartment extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <Text style={{ marginBottom: 20, color: "#00ACFF", fontSize: 18 }}>
            Edit Department!
          </Text>
          <TextInput
            placeholder="Department Name"
            placeholderTextColor="black"
            style={styles.textInput}
          />
          <TouchableOpacity style={styles.touchBtn}>
            <Text style={styles.text}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  secondContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderStyle: "solid",
    borderColor: "#00ACFF"
  },
  touchBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: "100%",
    height: 40,
    marginTop: 20,
    borderRadius: 10,
    borderColor: "#00ACFF",
    backgroundColor: "#00ACFF"
  },
  text: {
    color: "white"
  }
});
