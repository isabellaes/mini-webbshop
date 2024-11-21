import { View, FlatList, StyleSheet } from "react-native";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { useEffect, useState } from "react";
import { fetchProducts } from "../store/productSlice";
import { Product } from "../utils/types";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const data = useSelector((state: RootState) => state.product.products);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setProducts(data);
    console.log(data);
  }, [data]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <ProductCard
              product={item}
              onPress={() => {
                navigation.navigate("Product", { productId: item._id });
              }}
            />
          </View>
        )}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8874a3",
  },
  listContent: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cardContainer: {
    flex: 1,
    margin: 5,
    maxWidth: "50%",
  },
});
