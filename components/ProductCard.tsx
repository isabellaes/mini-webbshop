import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Product } from "../utils/types";

type Props = {
  product: Product;
  onPress: () => void;
};

const ProductCard = (props: Props) => {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/productimg.png")}
        />
        <Text style={styles.title}>{props.product.name}</Text>
        <Text style={styles.text}>{props.product.description}</Text>
        <Text style={styles.text}>${props.product.price}</Text>
      </View>
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
