import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Department from "../screens/department";
const StackNavigatorConfig = {
    initialRouteName: "Departmentrt"
  };
  const RouteConfigs = {
    Department: {
      screen: Department,
    //   navigationOptions: () => ({
    //    headerTitle:<NavTitle title="ScreenA"/>,
    //     headerStyle: { backgroundColor: "pink" },
       
    //   })
    },
  
    
    
  };
  export default createAppContainer(
    createStackNavigator(RouteConfigs, StackNavigatorConfig)
  );
  