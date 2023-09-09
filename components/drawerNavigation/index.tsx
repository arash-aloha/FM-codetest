import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { View, Button, Text } from "react-native";

const MenuDrawer = (props) => {
  return (
    <View
      style={{
        flex: 1,
        height: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Button
          title="Go to Home"
          onPress={() => props.navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

export default MenuDrawer;
