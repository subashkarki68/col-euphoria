import { View } from 'react-native';

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="bg-primary-light flex flex-row items-center justify-center rounded-lg px-4 py-2">
      {children}
    </View>
  );
};
