import { useColorScheme } from 'nativewind';
import { Image, ImageStyle, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className="bg-red-300 dark:bg-green-600">
      <View className="px-4">
        <Image
          source={require('../assets/col-graphics/euphoria-logo-light.png')}
          style={imageStyles}
        />
        <Switch value={colorScheme === 'dark'} onValueChange={toggleColorScheme} />
        <Text>{colorScheme}</Text>
      </View>
    </SafeAreaView>
  );
};

const imageStyles: ImageStyle = {
  height: 100,
  width: 120,
  objectFit: 'contain',
};
