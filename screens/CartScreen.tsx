import { View, Text, StyleSheet, Image, Button } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { Surface } from "react-native-paper";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { CartItem } from "../utils/types";

type CartScreenRouteProp = RouteProp<RootStackParamList, "Cart">;

type Props = {
  route: CartScreenRouteProp;
};

const CartScreen = (props: Props) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  function calculateTotalPrice(): number {
    return items.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
  }
  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);
  return (
    <View style={styles.container}>
      <Surface elevation={4} style={styles2.container}>
        {items.map((item) => (
          <View style={styles.cartItem}>
            <Image
              style={styles2.image}
              source={require("../assets/productimg.png")}
            ></Image>
            <View style={styles2.container}>
              <Text>{item.product.name}</Text>
              <Text>Price: ${item.product.price}</Text>
              <Text>Quantity: {item.quantity}</Text>
            </View>
          </View>
        ))}
      </Surface>
      <Text>Total price: ${calculateTotalPrice()} </Text>

      <Button
        title="Go to checkout"
        onPress={() => alert("Order placed.")}
      ></Button>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8874a3",
    alignItems: "center",
  },
  cartItem: {
    width: "95%",
    backgroundColor: "#e4dcf1",
    padding: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderRadius: 5,
    margin: 3,
  },
});

const styles2 = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    margin: 2,
  },
  title: {
    fontWeight: "bold",
    textAlign: "left",
    padding: 2,
  },
  text: {
    textAlign: "left",
    padding: 2,
  },
});
