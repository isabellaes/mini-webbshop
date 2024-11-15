import { View, FlatList, StyleSheet } from "react-native";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootNavigator";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const products = useSelector((state: RootState) => state.product.items);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <ProductCard
              product={item}
              onPress={() => {
                navigation.navigate("Product", { productId: item.id });
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
