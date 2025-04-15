import { useColorScheme } from 'nativewind';
import { ImageBackground, Text, View } from 'react-native';
import { ImageURL } from 'utils/constants';

import { Button } from './common/Button';

export const Hero = () => {
  const { colorScheme } = useColorScheme();
  return (
    <View>
      <ImageBackground
        source={{ uri: colorScheme === 'dark' ? ImageURL.dark : ImageURL.light }}
        style={{ width: '100%', height: '100%' }}>
        <View className="flex flex-col gap-8 px-8">
          <Text className="pt-48 text-4xl text-black dark:text-white">Beauty of Discover</Text>
          <Text className="text-5xl font-bold leading-normal text-black dark:text-white">
            Discover Your Dream Vacation
          </Text>
          <Text className="text-lg text-black dark:text-white">
            Find the best destinations and hotels for your travels. Check out our blog for
            recommendations, tips, and insider guides!
          </Text>
          <Button>
            <Text>Click Me</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};
