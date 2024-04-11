import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import tailwind from "twrnc";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

export default function NavigateCard() {
  const dispath = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tailwind`bg-white flex-1`}>
      <Text style={tailwind`text-center py-5 text-xl`}>Good Morning, G!</Text>
      <View style={tailwind`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            enablePoweredByContainer={false}
            fetchDetails={true}
            debounce={400}
            query={{
              key: process.env.GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispath(
                setDestination({
                  location: details?.geometry.location,
                  description: data.description,
                })
              );

              navigation.navigate("RideOptionsCard" as never);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
