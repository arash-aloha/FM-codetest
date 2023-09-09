import { StyleSheet } from "react-native";
import { COLORS, FONT, FONT_FAM, PADDING, SIZES } from "../../constans/indext";

const styles = StyleSheet.create({
  header_container: {
    position: "absolute",
    bottom: 0,
    justifyContent: "flex-end",
    paddingLeft: PADDING.small,
    paddingBottom: PADDING.medium,
  },
  title: {
    color: COLORS.primaryWhite,
    fontWeight: FONT.medium,
    fontSize: SIZES.xLarge,
  },
  location: {
    color: COLORS.primaryWhite,
    fontWeight: FONT.regular,
    fontSize: SIZES.medium,
    fontFamily: FONT_FAM.WS_regular,
  },
});

export default styles;
