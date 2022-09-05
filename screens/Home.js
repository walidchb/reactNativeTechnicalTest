import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import ProductView from "../components/ProductView";
import { connect } from "react-redux";

const Products = [
  {
    id: "348135e0-7ee0-11ec-8e9d-0da3379c480d",
    name: "Moment TABLETTE DE CHOCOLAT AU ECLATS D'AMANDES 90G",
    price: "146 DA",
    rating: 5,
    category: "epicerie-bonbons-chocolat",
    img: "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/1943/1.jpg?3356",
    tags: [
      "moment",
      "tablette",
      "chocolat",
      "eclats",
      "amandes",
      "90g",
      "epicerie",
      "bonbons",
      "chocolat",
    ],
    promotion: "0%",
  },
  {
    id: "34815cf0-7ee0-11ec-8e9d-0da3379c480d",
    name: "ELIT DRAGE GOUT AMANDE 60G",
    price: "175 DA",
    rating: 4,
    category: "epicerie-bonbons-chocolat",
    img: "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/3863/1.jpg?6095",
    tags: [
      "elit",
      "drage",
      "gout",
      "amande",
      "60g",
      "epicerie",
      "bonbons",
      "chocolat",
    ],
    promotion: "0%",
  },
  {
    id: "3481ab10-7ee0-11ec-8e9d-0da3379c480d",
    name: "ELIT DRAGE GOUT NOISETTE 60G",
    price: "175 DA",
    rating: 4,
    category: "epicerie-bonbons-chocolat",
    img: "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/32/3863/1.jpg?6113",
    tags: [
      "elit",
      "drage",
      "gout",
      "noisette",
      "60g",
      "epicerie",
      "bonbons",
      "chocolat",
    ],
    promotion: "0%",
  },
  {
    id: "3481d220-7ee0-11ec-8e9d-0da3379c480d",
    name: "Wawel Tablette Chocolat 70% Cafe 100G",
    price: "300 DA",
    rating: 3,
    category: "epicerie-bonbons-chocolat",
    img: "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/0063/1.jpg?1826",
    tags: [
      "wawel",
      "tablette",
      "chocolat",
      "70%",
      "cafe",
      "100g",
      "epicerie",
      "bonbons",
      "chocolat",
    ],
    promotion: "0%",
  },
  {
    id: "3481d221-7ee0-11ec-8e9d-0da3379c480d",
    name: "Moment TABLETTE DE CHOCOLAT A LA CREME CARAMEL 100G",
    price: "146 DA",
    rating: 5,
    category: "epicerie-bonbons-chocolat",
    img: "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/1943/1.jpg?3480",
    tags: [
      "moment",
      "tablette",
      "chocolat",
      "creme",
      "caramel",
      "100g",
      "epicerie",
      "bonbons",
      "chocolat",
    ],
    promotion: "0%",
  },
  {
    id: "3481d222-7ee0-11ec-8e9d-0da3379c480d",
    name: "Wawel Tablette Chocolat 90% Cacao 100G",
    price: "300 DA",
    rating: 2,
    category: "epicerie-bonbons-chocolat",
    img: "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/0063/1.jpg?1869",
    tags: [
      "wawel",
      "tablette",
      "chocolat",
      "90%",
      "cacao",
      "100g",
      "epicerie",
      "bonbons",
      "chocolat",
    ],
    promotion: "0%",
  },
  {
    id: "3481f930-7ee0-11ec-8e9d-0da3379c480d",
    name: "Soray Chocolat Cripton Luxe 500G",
    price: "450 DA",
    rating: 4,
    category: "epicerie-bonbons-chocolat",
    img: "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/0063/1.jpg?2223",
    tags: [
      "soray",
      "chocolat",
      "cripton",
      "luxe",
      "500g",
      "epicerie",
      "bonbons",
      "chocolat",
    ],
    promotion: "0%",
  },
  {
    id: "3481f931-7ee0-11ec-8e9d-0da3379c480d",
    name: "ELIT DRAGE GOUT RAISIN 60G",
    price: "160 DA",
    rating: 1,
    category: "epicerie-bonbons-chocolat",
    img: "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/02/3863/1.jpg?6039",
    tags: [
      "elit",
      "drage",
      "gout",
      "raisin",
      "60g",
      "epicerie",
      "bonbons",
      "chocolat",
    ],
    promotion: "0%",
  },
  {
    id: "34822040-7ee0-11ec-8e9d-0da3379c480d",
    name: "ELIT DRAGE GOUT ORANGE 60G",
    price: "160 DA",
    rating: 4,
    category: "epicerie-bonbons-chocolat",
    img: "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/91/3863/1.jpg?6000",
    tags: [
      "elit",
      "drage",
      "gout",
      "orange",
      "60g",
      "epicerie",
      "bonbons",
      "chocolat",
    ],
    promotion: "0%",
  },
  {
    id: "34822041-7ee0-11ec-8e9d-0da3379c480d",
    name: "Soray Chocolat Cripton 500G",
    price: "450 DA",
    rating: 5,
    category: "epicerie-bonbons-chocolat",
    img: "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/05/0063/1.jpg?1945",
    tags: [
      "soray",
      "chocolat",
      "cripton",
      "500g",
      "epicerie",
      "bonbons",
      "chocolat",
    ],
    promotion: "0%",
  },
  {
    id: "34822042-7ee0-11ec-8e9d-0da3379c480d",
    name: "Soray Chocolat Twin Classic 500G",
    price: "450 DA",
    rating: 2,
    category: "epicerie-bonbons-chocolat",
    img: "https://dz.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/0063/1.jpg?2282",
    tags: [
      "soray",
      "chocolat",
      "twin",
      "classic",
      "500g",
      "epicerie",
      "bonbons",
      "chocolat",
    ],
    promotion: "0%",
  },
];

const Home = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductView
            item={item}
            forCart={false}
            onPress={props.addItemToCart}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch({ type: "ADD_TO_CART", payload: product }),
  };
};
export default connect(null, mapDispatchToProps)(Home);
