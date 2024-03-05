import { ScrollView } from "react-native";

import { Ingredient } from "../Ingredient";

import { styles } from "./styles";

export function Ingredients() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Ingredient name="Maca" image="" selected />
    </ScrollView>
  );
}