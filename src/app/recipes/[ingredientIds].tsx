import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Recipe } from "@/src/components/Recipe";
import { Ingredients } from "@/src/components/Ingredients";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />
        <Text style={styles.title}>Ingredientes</Text>

        <Ingredients ingredients={[]} />

        <FlatList 
          data={["1"]}
          keyExtractor={item => item}
          renderItem={() => <Recipe recipe={{name: "Omelete", image: "https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_1154209327.jpg", minutes: 10}}/>}
        />
      </View>
    </View>
  );
}
