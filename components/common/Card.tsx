import { View } from 'react-native';

type CardProps = {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
};

export const Card = ({ children, variant = 'light', className }: CardProps) => {
  return (
    <View
      className={`${className} rounded-2xl p-8 ${variant === 'light' ? 'bg-col-primary-light' : 'bg-col-primary-dark'}`}>
      {children}
    </View>
  );
};
