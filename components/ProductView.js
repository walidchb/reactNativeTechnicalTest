import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";

const ProductView = (props) => {
  const { item, index } = props;

  if (!props.forCart) {
    return (
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: props.item.img,
            }}
          />
        </View>
        <View style={styles.containerRight}>
          <View>
            <Text style={{ fontSize: 20 }}>{props.item.name}</Text>
            <Text style={{ fontSize: 20, marginVertical: 10 }}>
              {props.item.price}
            </Text>
          </View>
          <Button title="Add to cart" onPress={() => props.onPress(item)} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: item.productinfo.img,
            }}
          />
        </View>

        <View style={styles.containerRight}>
          <View>
            <Text style={{ fontSize: 20 }}>{item.productinfo.name}</Text>
            <Text style={{ fontSize: 20, marginVertical: 10 }}>
              {item.productinfo.price}
            </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View style={styles.QTEcontainer}>
              <TouchableOpacity
                style={styles.AddSub}
                onPress={() => {
                  if (item.QTE > 1) {
                    props.updateQuantity(item.productinfo, item.QTE - 1);
                  }
                }}
              >
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 25, color: "black" }}>zmeifz</Text>

              <TouchableOpacity
                style={styles.AddSub}
                onPress={() => {
                  props.updateQuantity(item.productinfo, item.QTE + 1);
                }}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onPressDelete(item)}
            >
              <Text style={{ fontSize: 25, color: "white" }}>remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
    height: 300,
    width: "100%",
    padding: 5,
    flexDirection: "row",
    backgroundColor: "white",
  },
  containerRight: {
    justifyContent: "space-between",
    width: "60%",
    marginVertical: 5,
    padding: 5,
    backgroundColor: "white",
  },
  containerLeft: {
    width: "40%",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 100,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },

  QTEcontainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "yellow",
  },

  AddSub: {
    margin: 5,
    width: 50,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#FF5733",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuantity: (product, QTEE) =>
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { productinfo: product, QTE: QTEE },
      }),
  };
};
export default connect(null, mapDispatchToProps)(ProductView);
