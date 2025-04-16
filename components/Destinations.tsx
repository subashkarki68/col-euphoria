import { Text, View } from 'react-native';

export const Destinations = () => {
  return (
    <View className="flex w-full flex-col items-center">
      <View className="flex flex-col items-center gap-6">
        <Text className="text-3xl font-bold">Top Destinations</Text>
        <Text className="text-center text-xl text-gray-500">
          Planning for a trip? We will organize your trip with the best places and within best
          budget!
        </Text>
      </View>
    </View>
  );
};
