import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./navigation/RootNavigator";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "./store/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PaperProvider>
          <RootNavigator />
        </PaperProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
