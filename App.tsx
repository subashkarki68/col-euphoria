import { Hero } from 'components/Hero';
import { Navbar } from 'components/Navbar';
import { StatusBar, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import './global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="dark:bg-col-primary-dark bg-col-primary-light h-full w-full">
        <Navbar />
        <Hero />
        <StatusBar translucent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
