import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import tailwind from "twrnc";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

export default function NavFavourites() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tailwind`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity style={tailwind`flex-row items-center p-5`}>
          <Icon
            style={tailwind`mr-4 rounded-full bg-gray-300 p-3`}
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tailwind`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tailwind`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({});
