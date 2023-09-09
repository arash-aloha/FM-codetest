import { StyleSheet } from "react-native";
import { COLORS, FONT_FAM, MARGIN, PADDING, SIZES } from "../constans/theme";

const GlobalStyles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  container_center: {
    alignItems: "center",
    justifyContent: "center",
  },
  set_border: {
    borderColor: "yellow",
    borderStyle: "solid",
    borderWidth: 5,
  },
  image_overlay: {
    width: "100%",
    backgroundColor: "rgb(0, 0, 0)",
  },
  hero_image: {
    position: "relative",
    width: "100%",
    height: 300,
    opacity: 0.7,
  },
  cards_wrapper: {
    backgroundColor: COLORS.primaryGray,
    paddingHorizontal: PADDING.small,
    height: "100%",
  },
  card_container: {
    marginTop: SIZES.xLarge,
    rowGap: SIZES.medium,
    borderRadius: SIZES.xSmall,
  },
  cardText_wrapper: {
    height: "100%",
    width: "90%",
  },
});

export default GlobalStyles;
