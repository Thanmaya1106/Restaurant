// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign, FontAwesome6, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#666"
        />
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconSpacing}>
            <FontAwesome6 name="bell" size={28} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSpacing}>
            <MaterialIcons name="shopping-cart" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.squareContainer}>

          <View style={styles.square}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="silverware-fork-knife" size={40} color="#ec724a" style={{ alignSelf: 'center', marginTop: 10 }} />
            </TouchableOpacity>
            <Text style={styles.itemText}>Meals</Text>
          </View>
          <View style={styles.square}>
            <TouchableOpacity>
              <Ionicons name="fast-food" size={40} color="#ec724a" style={{ alignSelf: 'center', marginTop: 10 }} />
            </TouchableOpacity>
            <Text style={styles.itemText}>Itallian</Text>
          </View>
          <View style={styles.square}>
            <TouchableOpacity>
              <MaterialIcons name="emoji-food-beverage" size={40} color="#ec724a" style={{ alignSelf: 'center', marginTop: 10 }} />
            </TouchableOpacity>
            <Text style={styles.itemText}>Bevarages</Text>
          </View>
          <View style={styles.square}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="food-turkey" size={40} color="#ec724a" style={{ alignSelf: 'center', marginTop: 10 }} />
            </TouchableOpacity>
            <Text style={styles.itemText}>Meat</Text>
          </View>
          <View style={styles.square}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="noodles" size={40} color="#ec724a" style={{ alignSelf: 'center', marginTop: 10 }} />
            </TouchableOpacity>
            <Text style={styles.itemText}>Chinese</Text>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.bestSellerContainer}>
          <Text style={styles.bestSellerText}>Best Seller</Text>
          <TouchableOpacity style={styles.viewAllContainer} onPress={() => navigation.navigate('Bestseller')}>
            <Text style={styles.viewAllText}>View All</Text>
            <AntDesign name="right" size={14} color="#E95322" />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} style={styles.horizontalScrollView}>
          <View style={styles.rectangleContainer}>
          <TouchableOpacity>
            <Image source={require('./Images/1.png')} style={styles.rectangle} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./Images/2.png')} style={styles.rectangle} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./Images/3.png')} style={styles.rectangle} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('./Images/4.png')} style={styles.rectangle} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={styles.offersContainer}>
        <Text style={styles.offersText}>Our Offers & Coupons</Text>
      </View>
      <Swiper
        loop={true} // Set to true if you want continuous looping
        showsButtons={true}
        nextButton={<Text style={styles.buttonText}>›</Text>}
        prevButton={<Text style={styles.buttonText}>‹</Text>}
        buttonWrapperStyle={styles.buttonWrapper}
        showsPagination={false}
      >

        <View style={styles.slide}>
        <TouchableOpacity>
          <Image
            source={require('./Images/555.png')}
            style={styles.image}
          />
          </TouchableOpacity>
        </View>
        <View style={styles.slide}>
        <TouchableOpacity>
        <Image
            source={require('./Images/444.png')}
            style={styles.image}
          />
           </TouchableOpacity>
        </View>
        <View style={styles.slide}>
        <TouchableOpacity>
        <Image
            source={require('./Images/333.png')}
            style={styles.image}
          />
           </TouchableOpacity>
        </View>
        <View style={styles.slide}>
        <TouchableOpacity>
        <Image
            source={require('./Images/222.png')}
            style={styles.image}
          />
           </TouchableOpacity>
        </View>
        <View style={styles.slide}>
        <TouchableOpacity>
        <Image
            source={require('./Images/111.png')}
            style={styles.image}
          />
           </TouchableOpacity>
        </View>
      </Swiper>

      <View style={styles.recomandContainer}>
        <Text style={styles.recomandText}>Recommend</Text>
        <TouchableOpacity style={styles.viewAllContainer}>
            <Text style={styles.viewAllText}>View All</Text>
            <AntDesign name="right" size={14} color="#E95322" />
          </TouchableOpacity>
      </View>
      <View style={styles.rectangle1Container}>
      <TouchableOpacity>
        <Image source={require('./Images/11.png')} style={styles.rectangle1} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require('./Images/22.png')} style={styles.rectangle1} />
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    backgroundColor: '#ef6d42',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginTop: -40,
  },
  headerIcons: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: -40,
  },
  iconSpacing: {
    marginLeft: 15,
  },
  contentContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  square: {
    width: 60,
    height: 60,
    backgroundColor: '#efe097',
    borderRadius: 20,
    alignContent: 'center',

  },
  itemText: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#efe097',
    marginVertical: 10,
    marginTop: 20,

  },
  bestSellerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  bestSellerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 12,
    color: '#E95322',
    marginRight: 5,
    fontWeight: 'bold',
  },
  rectangleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: -8,
  },
  rectangle: {
    width: 100,
    height: 130,
    backgroundColor: '#efe097',
    marginLeft: 10,
    borderRadius: 20,
  },
  offersContainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  offersText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    alignItems: 'flex-start',
    marginLeft: 10,
  },


  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4a2a2',
    width: 340,
    height: 140,
    marginLeft: 10,
    borderRadius: 40,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 340,
    height: 140,
    marginLeft: 2,
    borderRadius: 40,
  },
  recomandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -595,
  },
  recomandText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: 10,
  },
  rectangle1Container: {
    flexDirection: 'row',
    marginLeft: -10,
    marginTop: 10,
  },
  rectangle1: {
    width: 160,
    height: 130,
    backgroundColor: '#efe097',
    marginLeft: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  buttonWrapper: {
    position: 'absolute',
    top: -310, // Adjust top position as needed
    zIndex: 10, // Ensure buttons appear above images
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 12,
  },
});

export default HomeScreen;
