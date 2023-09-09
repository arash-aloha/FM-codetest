import { View, Text } from "react-native";
import GlobalStyles from "../../styles/styles";

const LoadingScreen = () => {
  return (
    <View
      style={{ justifyContent: "center", alignSelf: "center", marginTop: 100 }}
    >
      <Text>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;
