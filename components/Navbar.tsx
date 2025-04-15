import { useColorScheme } from 'nativewind';
import { Image, ImageStyle, Switch, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const imageSource =
    colorScheme === 'light'
      ? require('../assets/col-graphics/euphoria-logo-light.png')
      : require('../assets/col-graphics/euphoria-logo-dark.png');
  return (
    <>
      <View className="fixed z-50 flex w-full flex-row items-center justify-between px-4 backdrop-blur-md dark:bg-black/30">
        <Image source={imageSource} style={imageStyles} />
        <Switch value={colorScheme === 'dark'} onValueChange={toggleColorScheme} />
        <Icon name="bars" color={colorScheme === 'dark' ? 'white' : 'black'} size={32} />
      </View>
    </>
  );
};

const imageStyles: ImageStyle = {
  height: 100,
  width: 120,
  objectFit: 'contain',
};
