import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ActivityIndicator,View ,Image,SafeAreaView} from 'react-native';
import Loading from "./assets/components/loading.jsx"
import GetStarted from './assets/components/getStarted.jsx';
import Welcome from './assets/components/welcome.jsx';
export default function App() {
  return (

    <>
    {/* <Loading/> */}
    {/* <GetStarted /> */}
    <Welcome />
    </>
        

  );
}


