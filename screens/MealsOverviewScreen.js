import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen() {
  //   const catId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen </Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
