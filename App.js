import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const bruschettaImg = require('./assets/bruschetta.png');

function HomeScreen({ navigation }) {
  const [servings, setServings] = useState(0);
  return (
    <View style={styles.HomeContainer}>
      <Text style={styles.HomeHeader}>Bruschetta Recipe</Text>
      <Image source={bruschettaImg} style={styles.bruschettaImg} />
      <TextInput 
        style={styles.servingsInput}
        placeholder="Enter the Number of Servings"
        onChangeText={newText => setServings(newText)}
      />
      <TouchableOpacity 
        style={styles.ViewRecipeBtn}
        onPress={() => {
          navigation.navigate('Recipe', {
            servings: servings,
          });
        }}
      >
        <Text style={styles.RecipeBtnTxt}>View Recipe</Text>
      </TouchableOpacity>
    </View>
  );
}

function RecipeScreen({ route, navigation }) {
  const { servings } = route.params;
  return (
    <View style={styles.RecipeContainer}>
      <Text style={styles.RecipeHeader}>Bruschetta</Text>
      <Text style={styles.IngredientsHeader}>Ingredients</Text>
      <View style={styles.IngredientList}>
        <Text style={styles.IngredientContent}>{servings*4} plum tomatoes</Text>
        <Text style={styles.IngredientContent}>{servings*6} basil leaves</Text>
        <Text style={styles.IngredientContent}>{servings*3} garlic cloves, chopped</Text>
        <Text style={styles.IngredientContent}>{servings*3} TB olive oil</Text>
      </View>
      <Text style={styles.DirectionsHeader}>Directions</Text>
      <View style={styles.Directions}>
        <Text style={styles.IngredientContent}>
          Combine the ingredients add salt to taste. Top French bread slices with mixture
        </Text>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Healthy Recipes", headerStyle: {backgroundColor: "#f4501c",}, headerTintColor: '#ffffff', }} />
        <Stack.Screen name="Recipe" component={RecipeScreen} options={{ title: "", headerStyle: {backgroundColor: "#f4501c",}, headerTintColor: '#ffffff', }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    alignItems: 'center',
  },
  HomeHeader: {
    fontSize: 35,
    justifyContent: "center",
    marginTop: 40,
  },
  bruschettaImg: {
    marginTop:20,
  },
  servingsInput: {
    fontSize: 18,
    marginTop: 30,
    textAlign: 'center',
  },
  ViewRecipeBtn: {
    backgroundColor: '#909090',
    marginTop: 30,
  },
  RecipeBtnTxt: {
    fontSize: 20,
    color: '#ffffff',
    padding: 10,
  },
  RecipeContainer: {
    flex: 1, 
    alignItems: 'center', 
  },
  RecipeHeader: {
    fontSize: 35,
    justifyContent: "center",
    marginTop: 80,
  },
  IngredientsHeader: {
    alignSelf: 'flex-start', 
    fontSize: 25,
    marginTop: 20,
    marginLeft: 20,   
  },
  DirectionsHeader: {
    alignSelf: 'flex-start', 
    fontSize: 25,
    marginTop: 20,
    marginLeft: 20,
  },
  IngredientList: {
    alignSelf: 'flex-start',
  },
  IngredientContent: {
    fontSize: 20,
    marginLeft: 40,
    marginRight: 40,
  },
});
