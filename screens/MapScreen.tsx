import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import tailwind from "twrnc";

import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

export default function MapScreen() {
  const Stack = createStackNavigator();

  return (
    <View>
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
