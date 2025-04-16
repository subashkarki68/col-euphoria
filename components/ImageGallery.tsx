import { createRef } from 'react';
import { Button, Image, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/AntDesign';
import { Destination } from 'types/destinations.type';
import { window } from 'utils/constants';

type ImageGalleryProps = {
  data: Destination[];
};

export const ImageGallery = ({ data }: ImageGalleryProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const progress = useSharedValue<number>(0);
  const carouselRef = createRef<ICarouselInstance>();

  const onNavigationPress = ({ isLeft }: { isLeft: boolean }) => {
    return isLeft ? carouselRef.current?.prev() : carouselRef.current?.next();
  };

  return (
    <View id="carousel-component">
      <View className="absolute top-1/2 z-20 flex w-full -translate-y-1/2 flex-row justify-between px-2">
        {['arrowleft', 'arrowright'].map((iconName, index) => (
          <TouchableOpacity
            onPress={() => onNavigationPress({ isLeft: index === 0 })}
            key={index}
            className="rounded-full bg-white p-3 shadow-xl dark:bg-col-primary-dark">
            <Icon name={iconName} size={20} color={isDarkMode ? 'white' : 'black'} />
          </TouchableOpacity>
        ))}
      </View>
      <Carousel
        ref={carouselRef}
        autoPlayInterval={2000}
        data={data}
        height={258}
        containerStyle={{ position: 'relative' }}
        loop
        pagingEnabled
        autoPlay
        scrollAnimationDuration={600}
        width={window.width}
        style={{
          width: window.width,
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 30,
          parallaxAdjacentItemScale: 0.1,
        }}
        onProgressChange={progress}
        renderItem={({ item }) => {
          return (
            <View>
              <Image
                source={{ uri: item.imageUrl }}
                style={{
                  width: window.width,
                  height: 258,
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
              />
              <View className="absolute bottom-0 w-full bg-black/0 px-4 py-2">
                <Text className="text-4xl font-bold text-white">{item.name}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
