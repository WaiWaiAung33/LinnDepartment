import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
const { width } = Dimensions.get("window");

export default class Employee extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("createEmployee")}
          style={styles.createBtn}
        >
          <Text style={styles.text}>Create Employee</Text>
        </TouchableOpacity>
        <View style={styles.secondContainer}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("employeeDetail", {
                employeeName: "Ma Hla"
              })
            }
          >
            <Image
              source={require("../assets/icons/img.png")}
              style={styles.img}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: "column" }}>
            <Text>Ma Hla</Text>
            <Text style={{ marginTop: 10 }}>0912345678</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("editEmployee")}
              style={[
                styles.touchBtn,
                { borderColor: "#00ACFF", backgroundColor: "#00ACFF" }
              ]}
            >
              <Text style={styles.text}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.touchBtn,
                { marginTop: 10, borderColor: "red", backgroundColor: "red" }
              ]}
            >
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.secondContainer}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("employeeDetail", {
                employeeName: "Mg Kyaw Kyaw"
              })
            }
          >
            <Image
              source={require("../assets/icons/img.png")}
              style={styles.img}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: "column" }}>
            <Text>Mg Kyaw Kyaw</Text>
            <Text style={{ marginTop: 10 }}>0912345678</Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("editEmployee")}
              style={[
                styles.touchBtn,
                { borderColor: "#00ACFF", backgroundColor: "#00ACFF" }
              ]}
            >
              <Text style={styles.text}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.touchBtn,
                { marginTop: 10, borderColor: "red", backgroundColor: "red" }
              ]}
            >
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  createBtn: {
    marginTop: 20,
    marginLeft: 30,
    borderWidth: 1,
    width: width / 2 - 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#00ACFF",
    backgroundColor: "#00ACFF",
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.5, // IOS
    shadowRadius: 3,
    borderRadius: 5
  },
  text: {
    color: "white"
  },
  secondContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    padding: 10,
    borderColor: "white",
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.5, // IOS
    shadowRadius: 3
  },
  img: {
    width: 100,
    height: 100
  },
  touchBtn: {
    borderWidth: 1,
    width: 80,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "solid",
    borderRadius: 5
  }
});
