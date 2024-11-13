import { View, Text, StyleSheet } from "react-native";
import { Product } from "../utils/types";

type Props = {
  product: Product;
};

const ProductCard = (props: Props) => {
  return (
    <View>
      <Text>{props.product.name}</Text>
      <Text>{props.product.description}</Text>
      <Text>{props.product.price}</Text>
    </View>
  );
};

export default ProductCard;
