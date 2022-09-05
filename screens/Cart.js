import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import ProductView from "../components/ProductView";
import { connect } from "react-redux";

const Cart = (props) => {
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    let ttl = 0;

    props.cartItems.forEach((element) => {
      ttl = ttl + parseFloat(element.productinfo.price) * element.QTE;
    });

    setTotal(ttl);
  }, []);

  useEffect(() => {
    let ttl = 0;

    props.cartItems.forEach((element) => {
      ttl = ttl + parseFloat(element.productinfo.price) * element.QTE;
    });

    setTotal(ttl);
  }, [props.cartItems]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={props.cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductView
              item={item}
              forCart={true}
              onPressDelete={props.removeItem}
            />
          )}
        />
      </View>
      <View>
        <Text>Estimated Total : {Total} DA</Text>
        <Button title="Checkout" />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (product) =>
      dispatch({ type: "REMOVE_FROM_CART", payload: product }),
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
