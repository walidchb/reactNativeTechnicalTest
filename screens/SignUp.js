import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";

const SignUp = ({ navigation }) => {
  return (
    <View>
      <Formik
        initialValues={{
          First_name: "",
          Last_name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => {
          navigation.navigate("Login");
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("First_name")}
              onBlur={handleBlur("First_name")}
              value={values.First_name}
              placeholder="First name"
            />
            <Text>error</Text>
            <TextInput
              style={styles.input}
              multiline
              onChangeText={handleChange("Last_name")}
              onBlur={handleBlur("Last_name")}
              value={values.Last_name}
              placeholder="last name"
            />
            <Text>errors</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="email"
            />
            <Text>error</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="password"
              secureTextEntry={true}
            />
            <Text>errors</Text>

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
});

export default SignUp;
