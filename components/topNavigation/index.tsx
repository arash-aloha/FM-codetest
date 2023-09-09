import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles, stylesWithProps } from "./topNavigation.style";
import GlobalStyles from "../../styles/styles";

const TopNavigation = ({ logoUrl, menuImageUrl, goBackIcon, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={
        stylesWithProps({
          insetsLeft: insets.left,
          insetsRight: insets.right,
        }).nav_container
      }
    >
      <View style={GlobalStyles.container}>
        {goBackIcon ? (
          <TouchableOpacity
            style={styles.goBack_container}
            onPress={() => navigation.goBack()}
          >
            <Image style={styles.goBack_icon} source={goBackIcon} />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          style={styles.logo_container}
          onPress={() => navigation.navigate("Home")}
        >
          <Image style={styles.logo_img} source={logoUrl} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menu_container}
          onPress={() => navigation.openDrawer()}
        >
          <Image style={styles.menu_img} source={menuImageUrl} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNavigation;
