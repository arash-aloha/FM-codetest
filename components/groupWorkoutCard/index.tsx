import { Text, View } from "react-native";
import styles from "./groupWorkoutCard.style";
import { getTime } from "../../utils";

const GroupWorkoutCard = ({ item }) => {
  const { instructors, slots, groupActivityProduct, duration } = item;

  return (
    <View style={styles.card_container}>
      <View style={styles.text_container}>
        <Text style={styles.slots_text}>
          {slots.leftToBookIncDropin} places remaining
        </Text>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.groupActivity}>{groupActivityProduct.name}</Text>
      </View>
      <View style={styles.text_container}>
        <Text>
          {getTime(duration.start)} <Text>{instructors[0].name}</Text>
        </Text>
      </View>
    </View>
  );
};

export default GroupWorkoutCard;
