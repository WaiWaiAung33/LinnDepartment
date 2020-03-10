import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class EmployeeDetail extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <Image
            source={require("../assets/icons/img.png")}
            style={styles.img}
          />
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.text}>Name:</Text>
              <Text style={styles.text}>Father Name:</Text>
              <Text style={styles.text}>NRC No:</Text>
              <Text style={styles.text}>Phone No:</Text>
              <Text style={styles.text}>Address:</Text>
            </View>
            <View>
              <Text style={styles.text}>Ma Hla</Text>
              <Text style={styles.text}>U Ba</Text>
              <Text style={styles.text}>7/kathakha(N)190789</Text>
              <Text style={styles.text}>091234567</Text>
              <Text style={[styles.text, { marginBottom: 35 }]}>Naypyitaw</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  secondContainer: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    padding: 10,
    paddingTop: 15,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    shadowOpacity: 1, //for IOS
    shadowColor: "rgba(0,0,0, .4)", //for IOS
    shadowOffset: { height: 1, width: 1 }, //for IOs
    backgroundColor: "white" //for IOS
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 40,
    borderRadius: 50
  },
  text: {
    marginTop: 10,
    fontSize: 18
    // marginBottom:30
  }
});
