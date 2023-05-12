import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './app/screens/Main';
import DiscSelector from './app/screens/DiskSelector';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from "expo-font";
import PlayGame from './app/screens/PlayGame';
import { StyledView } from './styling/GlobalStyling';


const { Navigator, Screen } = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    "OpenSans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "BebasNeue": require("./assets/fonts/BebasNeue-Regular.ttf"),
  })
  if(!fontsLoaded) {
    return <StyledView />
  }

  return (
  <SafeAreaProvider style={{flex: 1, backgroundColor: "white"}}>
      <NavigationContainer>
        <Navigator screenOptions={{headerShown: true}}>
          <Screen name="DiscSelector" component={DiscSelector}></Screen>
          <Screen name="Home" component={Main}></Screen>
          <Screen name="PlayGame" component={PlayGame}></Screen>
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}