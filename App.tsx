import { Navbar } from 'components/Navbar';
import { StatusBar } from 'react-native';
import './global.css';

export default function App() {
  return (
    <>
      <Navbar />
      <StatusBar translucent />
    </>
  );
}
