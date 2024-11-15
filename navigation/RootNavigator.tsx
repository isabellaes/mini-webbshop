import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import { Ionicons } from "@expo/vector-icons";
import CartScreen from "../screens/CartScreen";
import CartIconWithBadge from "../components/CartIconWithBadge";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { CartItem } from "../utils/types";

export type RootStackParamList = {
  Home: undefined;
  Product: { productId: string };
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: { backgroundColor: "#2e003e" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Product" component={ProductDetailScreen} />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator
    initialRouteName="Cart"
    screenOptions={{
      headerStyle: { backgroundColor: "#2e003e" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Cart" component={CartScreen} />
  </Stack.Navigator>
);

const RootNavigator = () => {
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  function calculateTotalQuantity(cartItems: CartItem[]): number {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
  }
  useEffect(() => {
    const quantity = calculateTotalQuantity(cartItems);
    setCartItemsCount(quantity);
  }, [cartItems]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === "Cart") {
              return (
                <CartIconWithBadge
                  size={size}
                  color={color}
                  badgeCount={cartItemsCount}
                />
              );
            } else {
              return (
                <Ionicons name={"home-outline"} size={size} color={color} />
              );
            }
          },
          tabBarActiveTintColor: "#2e003e",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Cart"
          component={CartStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
