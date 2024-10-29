import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen //Nav Home
          name="HomeScreen"
          component={HomeScreen}
          //este Option es la funcion y Objeto que permite Nagevar a otra Vista
          options={({ navigation }) => ({
            title:'taskApp',
            headerStyle: { backgroundColor: "darkgray" },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("TaskFormScreen")}>
                <Text style={{marginRight:20}}>New</Text>
              </TouchableOpacity>
            ),
          })}  />

        <Stack.Screen //Nav TaskList
          options={{title:'Create a New Taks',headerStyle: { backgroundColor: "darkgray" },}}
          name="TaskFormScreen"
          component={TaskFormScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
