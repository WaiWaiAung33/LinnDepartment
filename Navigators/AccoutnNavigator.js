import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Department from "../screens/department";
import register from "../screens/register";
import login from "../screens/login";
import employee from "../screens/employee";
import employeeDetail from "../screens/employeeDetail";
import createDepartmet from "../screens/createDepartment";
import editDepartment from "../screens/editDepartment";
import createEmployee from "../screens/createEmployee";
import editEmployee from "../screens/editEmployee";

const StackNavigatorConfig = {
  initialRouteName: "login"
};
const RouteConfigs = {
  login: {
    screen: login,
    navigationOptions: () => ({
      header: null
    })
  },
  register: {
    screen: register,
    navigationOptions: () => ({
      header: null
    })
  },
  Department: {
    screen: Department,
    navigationOptions: () => ({
      headerTitle: "Department",
      headerTitleAlign: {
        alignItems: "center",
        justifyContent: "center"
      },
      headerStyle: { backgroundColor: "#0029F9" },
      headerTitleStyle: { color: "white" }
    })
  },
  employee: {
    screen: employee,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("department"),
      headerTitleAlign: {
        alignItems: "center",
        justifyContent: "center"
      },
      headerStyle: { backgroundColor: "#0029F9" },
      headerTitleStyle: { color: "white" }
    })
  },
  employeeDetail: {
    screen: employeeDetail,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("employeeName"),
      headerTitleAlign: {
        alignItems: "center",
        justifyContent: "center"
      },
      headerStyle: { backgroundColor: "#0029F9" },
      headerTitleStyle: { color: "white" }
    })
  },
  createDepartmet:{
    screen:createDepartmet,
    navigationOptions:()=>({
      headerStyle: { backgroundColor: "#0029F9" },
    })
  },
  editDepartment:{
    screen:editDepartment,
    navigationOptions:()=>({
      headerStyle: { backgroundColor: "#0029F9" },
    })
  },
  createEmployee:{
    screen:createEmployee,
    navigationOptions:()=>({
      headerStyle: { backgroundColor: "#0029F9" },
    })
  },
  editEmployee:{
    screen:editEmployee,
    navigationOptions:()=>({
      headerStyle: { backgroundColor: "#0029F9" },
    })
  }
};
export default createAppContainer(
  createStackNavigator(RouteConfigs, StackNavigatorConfig)
);
