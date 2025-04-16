import server from 'mock-server/server';
import { useEffect, useState } from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Statistics as TStatistics } from 'types/statistics.type';

export const Statistics = () => {
  const [statistics, setStatistics] = useState<TStatistics[]>([]);
  useEffect(() => {
    fetch('/statistics')
      .then((response) => response.json())
      .then((data) => setStatistics(data));
    return () => {
      server.shutdown();
    };
  });

  return (
    <View className="mb-32">
      <View className="relative">
        <ImageBackground
          source={{ uri: 'https://www.euphoria.colglobal.org/img/home-travel-agency.webp' }}
          className="absolute flex h-[520px] w-full"
          blurRadius={40}
        />
        <Image
          source={{ uri: 'https://www.euphoria.colglobal.org/img/home-travel-agency.webp' }}
          className="mx-12 flex h-[520px]"
        />
        <View
          className="top-safe absolute right-0 flex w-72 translate-y-10 flex-row items-center gap-4 bg-white p-4 shadow-2xl shadow-slate-900 dark:bg-col-primary-dark"
          style={{ borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }}>
          <View className="rounded-xl bg-col-secondary/5 p-8">
            <Icon name="globe-outline" size={24} color="#EF4444" />
          </View>
          <View>
            <Text className="text-xl text-slate-400">Travel Packages</Text>
            <Text className="text-2xl font-semibold text-black dark:text-white">
              {statistics[0] ? `${statistics[0].numberOfTravelPackages}+` : `0+`}
            </Text>
          </View>
        </View>
        <View
          className="bottom-safe absolute left-0 flex w-72 -translate-y-10 flex-row items-center gap-4 bg-white p-4 shadow-2xl shadow-slate-900 dark:bg-col-primary-dark"
          style={{ borderTopRightRadius: 12, borderBottomRightRadius: 12 }}>
          <View className="rounded-xl bg-col-secondary/5 p-8">
            <Icon name="globe-outline" size={24} color="#EF4444" />
          </View>
          <View>
            <Text className="text-xl text-slate-400">Visitor</Text>
            <Text className="text-2xl font-semibold text-black dark:text-white">
              {statistics[0] ? `${statistics[0].numberOfTravelPackages}+` : `0+`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
