import { View, Text, StyleSheet, Image, Button } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { products } from "../utils/data";

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, "Product">;

type Props = {
  route: ProductDetailScreenRouteProp;
};

const ProductDetailScreen = (props: Props) => {
  const { productId } = props.route.params;

  const product = products.find((p) => p.id === productId);

  return (
    <View style={styles.container}>
      <View style={styles2.container}>
        <Image
          style={styles2.image}
          source={require("../assets/productimg.png")}
        />
        <Text style={styles2.title}>{product?.name}</Text>
        <Text style={styles2.text}>{product?.description}</Text>
        <Text style={styles2.text}>${product?.price}</Text>
        <Button title="Add to cart" color={"#3d2352"} />
      </View>
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
  },
  image: {
    width: 100,
    height: 100,
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
