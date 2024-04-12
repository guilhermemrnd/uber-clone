import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";
import { Icon, Image } from "react-native-elements";
import tailwind from "twrnc";

import { selectTravelTimeInfo } from "../slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RAGE = 1.5;

export default function RideOptionsCard() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState<(typeof data)[0]>();
  const travelTimeInfo = useSelector(selectTravelTimeInfo);

  return (
    <SafeAreaView style={tailwind`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={tailwind`absolute top-3 left-5 z-50 p-3 rounded-full`}
          onPress={() => navigation.navigate("NavigateCard" as never)}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tailwind`py-5 text-center text-xl`}>
          Select a Ride {travelTimeInfo?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tailwind.style(
              "flex-row items-center justify-between px-10",
              item.id === selected?.id && "bg-gray-200"
            )}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <View style={tailwind`-ml-6`}>
              <Text style={tailwind`text-xl font-semibold`}>{item.title}</Text>
              <Text>{travelTimeInfo?.duration?.text} Travel time</Text>
            </View>
            <Text style={tailwind`text-xl`}>
              {new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD",
              }).format(
                (travelTimeInfo?.duration?.value *
                  SURGE_CHARGE_RAGE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={tailwind`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          style={tailwind.style(
            "bg-black py-3 m-3",
            !selected && "bg-gray-300"
          )}
          disabled={!selected}
        >
          <Text style={tailwind`text-white text-xl text-center`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
