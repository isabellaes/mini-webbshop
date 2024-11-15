import { View, Text, StyleSheet, Image, Button } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { Surface } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { addItem } from "../store/cartSlice";

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, "Product">;

type Props = {
  route: ProductDetailScreenRouteProp;
};

const ProductDetailScreen = (props: Props) => {
  const { productId } = props.route.params;
  const products = useSelector((state: RootState) => state.product.items);
  const product = products.find((p) => p.id === productId);

  const dispatch = useDispatch<AppDispatch>();

  const addToCart = () => {
    if (product) dispatch(addItem({ product, quantity: 1 }));
  };

  return (
    <View style={styles.container}>
      <Surface elevation={4} style={styles2.container}>
        <Image
          style={styles2.image}
          source={require("../assets/productimg.png")}
        />
        <Text style={styles2.title}>{product?.name}</Text>
        <Text style={styles2.text}>{product?.description}</Text>
        <Text style={styles2.text}>${product?.price}</Text>
        <Button onPress={addToCart} title="Add to cart" color={"#3d2352"} />
      </Surface>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8874a3",
    alignItems: "center",
  },
});

const styles2 = StyleSheet.create({
  container: {
    width: "95%",
    height: "50%",
    backgroundColor: "#e4dcf1",
    padding: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
    borderRadius: 5,
  },
  image: {
    width: 250,
    height: 250,
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
