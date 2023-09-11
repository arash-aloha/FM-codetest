import { View, FlatList, SafeAreaView } from "react-native";
import Header from "../../components/header";
import GlobalStyles from "../../styles/styles";
import { allClubsEndpoint, baseUrl, images } from "../../constans/indext";
import GymUnitCard from "../../components/gymUnitCard";

import useFetch from "../../utils/hook";
import LoadingScreen from "../../components/loadingText";
import ErrorButton from "../../components/errorButton";
import { useEffect } from "react";

export interface BusinessUnits {
  id: string;
  name: string;
}

function HomeScreen({ navigation }) {
  // const { data, isLoading, isError } = useFetch(allClubsEndpoint);

  const { data, isError, isLoading, fetchData } = useFetch(allClubsEndpoint);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("DATA: ", data);

  return (
    <SafeAreaView>
      <View style={GlobalStyles.container}>
        <Header
          navigation={navigation}
          heroImageUrl={images.liftweights}
          headerInfo={{
            title: "Our gyms",
            name: null,
            address: null,
          }}
          goBackIcon={null}
        />

        {isLoading ? (
          <LoadingScreen />
        ) : isError ? (
          <ErrorButton endpoint={baseUrl} />
        ) : (
          <View style={GlobalStyles.cards_wrapper}>
            <FlatList
              data={data}
              maxToRenderPerBatch={10}
              renderItem={({ item }) => (
                <GymUnitCard data={item} navigation={navigation} />
              )}
              keyExtractor={(item) => item.id}
              style={GlobalStyles.card_container}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
