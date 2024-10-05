import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
import * as SecureStore from "expo-secure-store"
import { ClerkProvider,  SignedIn, SignedOut} from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from './../Navigations/TabNavigation';


SplashScreen.preventAutoHideAsync();
const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function app() {
  const [fontsLoaded] = useFonts({
    'outfit': require('/Users/Abhi/OneDrive/Desktop/REACT NATIVE/EV-Charging-Station-App/assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('/Users/Abhi/OneDrive/Desktop/REACT NATIVE/EV-Charging-Station-App/assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-bold': require('/Users/Abhi/OneDrive/Desktop/REACT NATIVE/EV-Charging-Station-App/assets/fonts/Outfit-Bold.ttf'),

  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <ClerkProvider 
    tokenCache={tokenCache}
    publishableKey={'pk_test_cmFyZS1mcm9nLTk2LmNsZXJrLmFjY291bnRzLmRldiQ'}>
    <View style={styles.container} onLayout={onLayoutRootView}>
      <SignedIn>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
      </SignedIn>
      <SignedOut>
        <LoginScreen/>
      </SignedOut>
      
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:25
  },
});
