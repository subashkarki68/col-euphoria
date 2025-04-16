import { Destinations } from 'components/Destinations';
import { Hero } from 'components/Hero';
import { Navbar } from 'components/Navbar';
import { useEffect } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import server from 'mock-server/server';
import './global.css';

export default function App() {
  useEffect(() => {
    fetch('/destinations')
      .then((response) => response.json())
      .then((data) => console.log(data));
    return () => {
      server.shutdown();
    };
  }, []);

  return (
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
  );
}
