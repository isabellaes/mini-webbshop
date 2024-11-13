import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Product: ProductDetailScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

const RootNavigator = () => {
  return <Navigation />;
};

export default RootNavigator;
