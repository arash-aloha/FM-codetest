import { View, Text } from "react-native";
import { COLORS, FONT, FONT_FAM, PADDING, SIZES } from "../../constans/indext";
import styles from "./headerText.style";
import { ClubInfo } from "../header";

type HeaderTextProps = {
  headerInfo: ClubInfo;
};

function HeaderText({ headerInfo }: HeaderTextProps) {
  return (
    <>
      {headerInfo.title ? (
        <View style={styles.header_container}>
          <Text style={{ fontFamily: FONT_FAM.WS_bold }}>
            <Text style={styles.title}>{headerInfo.title}</Text>
          </Text>
        </View>
      ) : (
        <View style={styles.header_container}>
          <Text style={styles.title}>{headerInfo.name}</Text>
          <Text style={styles.location}>{headerInfo.address.street}</Text>
          <Text style={styles.location}>
            {headerInfo.address.postalCode} {headerInfo.address.city}
          </Text>
        </View>
      )}
    </>
  );
}

export default HeaderText;
