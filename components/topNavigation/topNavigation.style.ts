import { StyleSheet } from "react-native";
import { MARGIN } from "../../constans/theme";

const stylesWithProps = ({ insetsLeft, insetsRight }) =>
  StyleSheet.create({
    nav_container: {
      position: "absolute",
      top: 0,
      width: "100%",
      paddingLeft: insetsLeft,
      paddingRight: insetsRight,
    },
  });

const styles = StyleSheet.create({
  logo_container: {
    alignSelf: "center",
  },
  logo_img: {
    height: 50,
    width: 50,
    resizeMode: "contain",
    top: 45,
  },
  menu_container: {
    alignSelf: "flex-end",
  },
  menu_img: {
    height: 44,
    width: 24,
    resizeMode: "contain",
    marginRight: MARGIN.small,
  },
  goBack_container: {
    position: "absolute",
    top: 60,
    marginLeft: MARGIN.small,
  },
  goBack_icon: {
    justifyContent: "center",
  },
});
export { styles, stylesWithProps };
