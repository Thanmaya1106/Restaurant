// FavoriteScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavoriteScreen = () => {
  const [favorites, setFavorites] = useState([
    { id: '1', image: require('./Images/1.png'), name: 'Pizza', liked: false, inCart: false, description: 'Delicious pizza with various toppings.' },
    { id: '2', image: require('./Images/2.png'), name: 'Burger', liked: false, inCart: false, description: 'Juicy burger with cheese and vegetables.' },
    { id: '3', image: require('./Images/3.png'), name: 'Sushi', liked: false, inCart: false, description: 'Fresh sushi rolls with soy sauce and wasabi.' },
    { id: '4', image: require('./Images/4.png'), name: 'Pasta', liked: false, inCart: false, description: 'Italian pasta with rich tomato sauce and basil.' },
    { id: '5', image: require('./Images/11.png'), name: 'Pizza', liked: false, inCart: false, description: 'Delicious pizza with various toppings.' },
    { id: '6', image: require('./Images/2.png'), name: 'Pizza', liked: false, inCart: false, description: 'Delicious pizza with various toppings.' },
  ]);

  const toggleLike = (item) => {
    setFavorites((prevFavorites) =>
      prevFavorites.map((food) =>
        food.id === item.id ? { ...food, liked: !food.liked } : food
      )
    );
  };

  const toggleCart = (item) => {
    setFavorites((prevFavorites) =>
      prevFavorites.map((food) =>
        food.id === item.id ? { ...food, inCart: !food.inCart } : food
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.cartIconContainer} onPress={() => toggleCart(item)}>
        <Icon name="shopping-cart" size={20} color={item.inCart ? '#E95322' : '#fff'} />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={item.image} // Use the image from the item
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.itemHeading}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
        <TouchableOpacity style={styles.heartIcon} onPress={() => toggleLike(item)}>
          <Icon
            name={item.liked ? 'heart' : 'heart-o'}
            size={22}
            color={item.liked ? '#E95322' : '#ccc'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Best Seller</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Discover our most popular dishes!</Text>
      </View>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2} // Display items in two columns
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    height: 90,
    width: 390,
    backgroundColor: '#E95322',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 10,
    marginTop: -10,
    marginLeft: -20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  descriptionContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  descriptionText: {
    fontSize: 18,
    color: '#E95322',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '45%', // Adjust width for two columns with margin
    aspectRatio: 0.75, // Aspect ratio for rectangular shape
    marginBottom: 15,
    position: 'relative', // Ensure position for cart icon
  },
  cartIconContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1, // Ensure cart icon appears above other content
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0', // Optional background color for image container
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  itemHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E95322',
  },
  itemDescription: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
  },
});

export default FavoriteScreen;
