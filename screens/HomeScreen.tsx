import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import tailwind from "twrnc";

import NavOptions from "../components/NavOptions";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tailwind`bg-white`}>
      <View style={tailwind`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
      </View>

      <NavOptions />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
