import { View, Text, SafeAreaView, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../components/navigation";
import { RouteProp } from "@react-navigation/native";

import Header, { Address } from "../../components/header";
import { icons, images } from "../../constans/indext";
import GroupWorkoutCard from "../../components/groupWorkoutCard";

import useFetch from "../../utils/hook";

import GlobalStyles from "../../styles/styles";
import styles from "./gym.style";
import {
  createEndpointUrl,
  getCurrentTimestamp,
  getTimestamp7DaysAhead,
} from "../../utils";
import LoadingScreen from "../../components/loadingText";
import ErrorButton from "../../components/errorButton";

type GymScreenProps = {
  navigation: NativeStackScreenProps<RootStackParamList>;
  route: RouteProp<{ params: { address: Address; name: string; id: string } }>;
};

function GymScreen({ navigation, route }: GymScreenProps) {
  const { address, name, id } = route.params;

  const startDate = getCurrentTimestamp();
  const endDate = getTimestamp7DaysAhead();
  const url = createEndpointUrl(id, startDate, endDate);

  const { data, error, isLoading } = useFetch(url);

  return (
    <SafeAreaView>
      <View style={GlobalStyles.container}>
        <Header
          navigation={navigation}
          heroImageUrl={images.situps}
          headerInfo={{ title: null, name, address }}
          goBackIcon={icons.arrowLeft}
        />

        {isLoading ? (
          <LoadingScreen />
        ) : error ? (
          <ErrorButton endpoint={url} />
        ) : (
          <View style={GlobalStyles.cards_wrapper}>
            <Text style={styles.section_title}>Upcoming sessions</Text>

            <FlatList
              data={data}
              renderItem={({ item }) => <GroupWorkoutCard item={item} />}
              keyExtractor={(item) => item?.id}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default GymScreen;
