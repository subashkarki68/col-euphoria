import { useColorScheme } from 'nativewind';
import { Button, ImageBackground, Platform, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { ImageURL } from 'utils/constants';

import { Card } from './common/Card';

export const Hero = () => {
  const { colorScheme } = useColorScheme();
  return (
    <View className="mb-24">
      <ImageBackground
        source={{ uri: colorScheme === 'dark' ? ImageURL.dark : ImageURL.light }}
        className="h-screen"
        resizeMode="cover">
        <View className="flex flex-col gap-8 px-8">
          <Text className="pt-48 text-4xl text-black dark:text-white">Beauty of Discover</Text>
          <Text className="text-5xl font-bold leading-normal text-black dark:text-white">
            Discover Your Dream Vacation
          </Text>
          <Text className="text-lg text-black dark:text-white">
            Find the best destinations and hotels for your travels. Check out our blog for
            recommendations, tips, and insider guides!
          </Text>
          <Card variant={colorScheme} className="my-8 flex flex-col gap-4">
            <Text className="text-black dark:text-white">Search:</Text>
            <View className="flex flex-row items-center border-2 border-gray-400 p-2">
              <Icon name="magnifying-glass" className="ml-2" size={20} color="gray" />
              <TextInput
                placeholder="Destination"
                placeholderTextColor="gray"
                autoComplete="country"
                className="px-4"
              />
            </View>
            <View className="rounded-lg bg-col-secondary">
              <Button title="Search" color={Platform.OS === 'ios' ? 'white' : '#EF4444'} />
            </View>
          </Card>
        </View>
      </ImageBackground>
    </View>
  );
};
