import { ScrollView, View, Text, StyleSheet } from "react-native";
import ProductCard from "../components/ProductCard";
import { products } from "../utils/data";

const HomeScreen = () => {
  return (
    <ScrollView>
      {products.map((p) => (
        <ProductCard product={p} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
