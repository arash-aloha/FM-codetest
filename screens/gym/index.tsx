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
  getEncodedTimeStamp,
  getTimestamp6DaysAhead,
} from "../../utils";
import LoadingScreen from "../../components/loadingText";
import ErrorButton from "../../components/errorButton";
import { useEffect } from "react";

type GymScreenProps = {
  navigation: NativeStackScreenProps<RootStackParamList>;
  route: RouteProp<{ params: { address: Address; name: string; id: string } }>;
};

function GymScreen({ navigation, route }: GymScreenProps) {
  const { address, name, id } = route.params;

  const startDate = getCurrentTimestamp();
  const endDate = getTimestamp6DaysAhead();

  const startDateAsIsoString = getEncodedTimeStamp(startDate);
  const endDateAsIsoString = getEncodedTimeStamp(endDate);

  const endpoint = createEndpointUrl(
    id,
    startDateAsIsoString,
    endDateAsIsoString
  );

  const { data, isError, isLoading, fetchData } = useFetch(endpoint);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("DATA FROM GYM SCREEN", data);
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
        ) : isError ? (
          <ErrorButton endpoint={endpoint} />
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
