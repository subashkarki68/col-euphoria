import { Navbar } from 'components/Navbar';
import { SafeAreaView, Text } from 'react-native';
import './global.css';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <Text>Hello</Text>
        <Navbar />
      </SafeAreaView>
    </>
  );
}
