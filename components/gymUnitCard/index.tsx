import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import icons from "../../constans/icons";
import styles from "./gymCard.styles";
import GlobalStyles from "../../styles/styles";

const GymUnitCard = ({ data, navigation }) => {
  const onPressNavigation = () => {
    navigation.navigate("GymUnit", data);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => onPressNavigation()} style={styles.card}>
        <View style={GlobalStyles.cardText_wrapper}>
          <View style={styles.cardText_container}>
            <Text style={styles.cardText}>{data.name}</Text>
            <Image source={icons.arrowRight} />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GymUnitCard;
