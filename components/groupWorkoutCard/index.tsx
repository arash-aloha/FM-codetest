import { Text, View } from "react-native";
import styles from "./groupWorkoutCard.style";
import { getTime } from "../../utils";

const GroupWorkoutCard = ({ item }) => {
  console.log("RESPONSE: ", item);
  return (
    <View style={styles.card_container}>
      <View style={styles.text_container}>
        <Text style={styles.slots_text}>
          {item.slots.leftToBookIncDropin} places remaining
        </Text>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.groupActivity}>
          {item.groupActivityProduct.name}
        </Text>
      </View>
      <View style={styles.text_container}>
        <Text>
          {getTime(item.duration.start)} {item.instructors.name}
        </Text>
      </View>
    </View>
  );
};

export default GroupWorkoutCard;
