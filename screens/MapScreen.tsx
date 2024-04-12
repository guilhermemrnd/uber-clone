import { StyleSheet, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import tailwind from "twrnc";

import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

export default function MapScreen() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={tailwind`absolute bg-gray-100 top-12 left-6 z-50 p-3 rounded-full shadow-lg`}
        onPress={() => navigation.navigate("HomeScreen" as never)}
      >
        <Icon name="menu" />
      </TouchableOpacity>

      <View style={tailwind`h-1/2`}>
        <Map />
      </View>

      <View style={tailwind`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
