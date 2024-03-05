import { View, Text, ScrollView } from "react-native";

import { styles } from "./styles";
import { Ingredient } from "@/src/components/Ingredient";
import { useState } from "react";

export default function Index() {
  const [selected, setSelected] = useState<string[]>([]);

  function handleToggleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value));
    } 
    setSelected((state) => [...state, value]);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}      
      <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>Descubra receitas baseadas nos produtos que você tem em casa</Text>

      <ScrollView contentContainerStyle={styles.ingredient} showsVerticalScrollIndicator={false}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Ingredient
            key={index}
            name="Maça"
            image=""
            selected={selected.includes(String(index))}
            onPress={() => handleToggleSelected(String(index))}
          />
        ))}
      </ScrollView>
    </View>
  );
}
