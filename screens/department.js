import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";
const { width } = Dimensions.get("window");

export default class Departmenet extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("createDepartmet")}
          style={styles.createBtn}
        >
          <Text style={styles.text}>Create Departmenet</Text>
        </TouchableOpacity>
        <View style={styles.btnContainer}>
          <View style={styles.secondContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("employee", {
                  department: "R & D"
                })
              }
              style={styles.touchBtn}
            >
              <Text>R & D</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                backgroundColor: "#0029F9"
                // backgroundColor: "#00ACFF"
                // backgroundColor: "#0029F9"
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("editDepartment")}
                style={[
                  styles.Btn,
                  { backgroundColor: "#00ACFF", borderColor: "#00ACFF" }
                ]}
              >
                <Text style={styles.text}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.Btn,
                  { backgroundColor: "red", borderColor: "red" }
                ]}
              >
                <Text style={styles.text}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.secondContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("employee", {
                  department: "Warehouse"
                })
              }
              style={styles.touchBtn}
            >
              <Text>Warehouse</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                backgroundColor: "#0029F9"
                // backgroundColor:"#00ACFF"
                // backgroundColor: "#0029F9"
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("editDepartment")}
                style={[
                  styles.Btn,
                  { backgroundColor: "#00ACFF", borderColor: "#00ACFF" }
                ]}
              >
                <Text style={styles.text}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.Btn,
                  { backgroundColor: "red", borderColor: "red" }
                ]}
              >
                <Text style={styles.text}>Delete</Text>
              </TouchableOpacity>
            </View>
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
    marginLeft: 40,
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
    // flexWrap: "wrap",
    borderRadius: 5
  },
  secondContainer: {
    margin: 10,
    // padding: 10,
    height: width / 2 - 50,
    width: width / 2 - 50,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#00ACFF"
  },
  btnContainer: {
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 10
  },
  touchBtn: {
    alignItems: "center",
    // backgroundColor: "#FFA100",
    justifyContent: "center",
    height: width / 2 - 120,
    backgroundColor: "#00ACFF"
  },
  Btn: {
    borderWidth: 1,
    width: 50,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    //   borderColor:"#00ACFF",
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 0.5, // IOS
    shadowRadius: 3,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5
  },
  text: {
    color: "white"
  }
});
