import { Destinations } from 'components/Destinations';
import { Hero } from 'components/Hero';
import { Navbar } from 'components/Navbar';
import { ScrollView, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import './global.css';

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <SafeAreaView className="h-full w-full bg-col-primary-light dark:bg-col-primary-dark">
          <Navbar />
          <ScrollView className="min-h-screen">
            <Hero />
            <Destinations />
          </ScrollView>
        </SafeAreaView>
        <StatusBar translucent />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
