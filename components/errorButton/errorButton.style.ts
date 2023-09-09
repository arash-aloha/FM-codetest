import { StyleSheet } from "react-native";
import { COLORS, FONT_FAM, SIZES } from "../../constans/indext";

const styles = StyleSheet.create({
  error_container: {
    height: 400,
    justifyContent: "center",
  },
  errorBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primaryDark,
    borderWidth: 10,
    height: 70,
    borderRadius: 8,
    margin: 24,
  },
  error_text: {
    color: COLORS.primaryWhite,
    fontSize: SIZES.medium,
    fontFamily: FONT_FAM.WS_bold,
  },
});

export default styles;
