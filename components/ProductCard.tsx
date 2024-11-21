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
    backgroundColor: "#e4dcf1",
    padding: 2,
    alignItems: "center",
    borderRadius: 5,
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
