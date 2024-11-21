import { Text, StyleSheet, Image, Pressable } from "react-native";
import { Product } from "../utils/types";
import { Surface } from "react-native-paper";
import imageMap from "../utils/imgsources";

type Props = {
  product: Product;
  onPress: () => void;
};

const ProductCard = (props: Props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Surface style={styles.container} elevation={4}>
        <Image
          style={styles.image}
          source={
            imageMap[props.product.img] || require("../assets/productimg.png")
          }
        />
        <Text style={styles.title}>{props.product.name}</Text>
        <Text style={styles.text}>${props.product.price}</Text>
      </Surface>
    </Pressable>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  image: {
    width: 197,
    height: 197,
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
