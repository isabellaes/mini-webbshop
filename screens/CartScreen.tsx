import { View, Text, StyleSheet, Image, Button } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { Surface } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { useEffect, useState } from "react";
import { CartItem } from "../utils/types";
import { Avatar } from "react-native-paper";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../store/cartSlice";
import { IconButton, MD3Colors } from "react-native-paper";

type CartScreenRouteProp = RouteProp<RootStackParamList, "Cart">;

type Props = {
  route: CartScreenRouteProp;
};

const CartScreen = (props: Props) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch<AppDispatch>();

  function updateCartItem(item: CartItem) {
    dispatch(increaseQuantity({ productId: item.product.id }));
  }

  function decreaseCartItem(item: CartItem) {
    dispatch(decreaseQuantity({ productId: item.product.id }));
  }

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
          <View style={styles.cartItem} key={item.product.id}>
            <Image
              style={styles2.image}
              source={require("../assets/productimg.png")}
            ></Image>
            <View style={styles2.container}>
              <Text style={styles2.title}>{item.product.name}</Text>
              <Text style={styles2.text}>Price: ${item.product.price}</Text>
              <View style={styles2.quantityContainer}>
                <IconButton
                  icon="minus"
                  iconColor={"#3d2352"}
                  size={20}
                  onPress={() => decreaseCartItem(item)}
                />
                <Text style={styles2.quantity}>{item.quantity}</Text>
                <IconButton
                  icon="plus"
                  iconColor={"#3d2352"}
                  size={20}
                  onPress={() => updateCartItem(item)}
                />
              </View>
            </View>
          </View>
        ))}
        <Text style={styles2.title}>
          Total price: ${calculateTotalPrice()}{" "}
        </Text>

        <Button
          title="Go to checkout"
          onPress={() => alert("Order placed.")}
          color={"#3d2352"}
        ></Button>
      </Surface>
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
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    gap: 6,
    margin: 6,
  },
  quantity: {
    textAlign: "center",
    padding: 4,
    fontSize: 18,
  },
});
