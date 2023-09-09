import { useCallback } from "react";
import { useFonts } from "expo-font";
import Navigation from "./components/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoadingScreen from "./components/loadingText";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "WorkSans-Bold": require("./assets/font/Work_Sans/static/WorkSans-Bold.ttf"),
    "WorkSans-Regular": require("./assets/font/Work_Sans/static/WorkSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <>
      {!fontsLoaded ? (
        <LoadingScreen /> //not a actual screen
      ) : (
        <SafeAreaProvider onLayout={onLayoutRootView}>
          <Navigation />
        </SafeAreaProvider>
      )}
    </>
  );
}
