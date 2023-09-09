import { StyleSheet } from "react-native";
import { COLORS, FONT_FAM, SIZES } from "../../constans/theme";

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    height: 135,
    backgroundColor: COLORS.primaryDark,
    marginBottom: SIZES.medium,
    borderRadius: SIZES.xSmall,
  },
  cardText_container: {
    marginTop: "auto",
    marginBottom: SIZES.xSmall,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardText: {
    color: COLORS.primaryWhite,
    fontFamily: FONT_FAM.WS_bold,
    fontSize: SIZES.large,
  },
});

export default styles;
