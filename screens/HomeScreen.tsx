import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import "react-native-gesture-handler";
import tailwind from "twrnc";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import NavOptions from "../components/NavOptions";
import { setDestination, setOrigin } from "../slices/navSlice";

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tailwind`bg-white h-full`}>
      <View style={tailwind`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />

        <GooglePlacesAutocomplete
          styles={{
            container: { flex: 0 },
            textInput: { fontSize: 18 },
          }}
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          debounce={400}
          query={{
            key: process.env.GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
