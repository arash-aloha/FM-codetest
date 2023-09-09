import { StyleSheet } from "react-native";
import { COLORS, FONT_FAM, MARGIN, SIZES } from "../../constans/indext";

const styles = StyleSheet.create({
  card_container: {
    alignItems: "center",
    justifyContent: "center",
    height: 140,
    backgroundColor: COLORS.primaryWhite,
    marginBottom: SIZES.medium,
    borderRadius: SIZES.xSmall,
    flex: 1,
  },
  text_container: {
    width: "90%",
    marginTop: SIZES.xSmall,
    marginBottom: SIZES.xSmall,
    justifyContent: "space-around",
    fontFamily: FONT_FAM.WS_regular,
  },
  slots_text: {
    color: COLORS.primaryGreen,
  },
  groupActivity: {
    fontFamily: FONT_FAM.WS_bold,
    fontSize: SIZES.large,
    padding: 0,
    margin: 0,
  },
});

export default styles;
