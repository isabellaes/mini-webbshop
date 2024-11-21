import { View, Text, StyleSheet, Image, Button } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { addItem } from "../store/cartSlice";
import imageMap from "../utils/imgsources";

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, "Product">;

type Props = {
  route: ProductDetailScreenRouteProp;
};

const ProductDetailScreen = (props: Props) => {
  const { productId } = props.route.params;
  const products = useSelector((state: RootState) => state.product.products);
  const product = products.find((p) => p._id === productId);

  const dispatch = useDispatch<AppDispatch>();

  const addToCart = () => {
    if (product) dispatch(addItem({ product, quantity: 1 }));
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles2.image}
        source={
          product ? imageMap[product.img] : require("../assets/productimg.png")
        }
      />
      <Text style={styles2.title}>{product?.name}</Text>
      <Text style={styles2.text}>{product?.description}</Text>
      <Text style={styles2.text}>Size: {product?.size}</Text>
      <Text style={styles2.text}>Tags: {product?.tags}</Text>
      <Text style={styles2.text}>${product?.price}</Text>
      <Button onPress={addToCart} title="Add to cart" color={"#3d2352"} />
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});

const styles2 = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    padding: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  image: {
    width: 400,
    height: 400,
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
