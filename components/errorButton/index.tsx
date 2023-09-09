import { View, TouchableOpacity, Text } from "react-native";
import useFetch from "../../utils/hook";
import styles from "./errorButton.style";

const ErrorButton = ({ endpoint }) => {
  const { reFetchData } = useFetch(endpoint);
  return (
    <View style={styles.error_container}>
      <TouchableOpacity onPress={() => reFetchData()} style={styles.errorBtn}>
        <Text style={styles.error_text}>
          Oops...Something went wrong. Press to Try again
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorButton;
