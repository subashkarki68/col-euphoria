import server from 'mock-server/server';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Destination } from 'types/destinations.type';

import { ImageGallery } from './ImageGallery';

export const Destinations = () => {
  const [destinations, setDestinations] = useState<Destination[]>();
  server.timing = 15000; //Mocking 15 seconds Delay
  useEffect(() => {
    fetch('/destinations')
      .then((response) => response.json())
      .then((data) => setDestinations(data));
    return () => {
      server.shutdown();
    };
  }, []);
  return (
    <View className="mb-24 flex w-full flex-col items-center bg-col-primary-light dark:bg-col-primary-dark">
      <View className="mb-16 flex flex-col items-center gap-6 px-4">
        <Text className="text-3xl font-bold dark:text-white">Top Destinations</Text>
        <Text className="text-center text-xl text-gray-500">
          Planning for a trip? We will organize your trip with the best places and within best
          budget!
        </Text>
      </View>
      {destinations ? (
        <ImageGallery data={destinations} />
      ) : (
        <Icon className="animate-spin" name="loading1" size={50} />
      )}
    </View>
  );
};
