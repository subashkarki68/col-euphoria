import { useColorScheme } from 'nativewind';
import { Image, ImageStyle, Switch, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const imageSource =
    colorScheme === 'light'
      ? require('../assets/col-graphics/euphoria-logo-light.png')
      : require('../assets/col-graphics/euphoria-logo-dark.png');
  return (
    <>
      <View
        style={{ backgroundColor: colorScheme === 'dark' ? 'black' : '#FFF' }}
        className="z-50 flex w-full flex-row items-center justify-between px-2 pr-4 blur-2xl">
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
