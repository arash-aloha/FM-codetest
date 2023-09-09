import {
  StatusBar,
  View,
  SafeAreaView,
  ImageSourcePropType,
} from "react-native";
import GlobalStyles from "../../styles/styles";
import HeroBackground from "../hero";
import TopNavigation from "../topNavigation";
import icons from "../../constans/icons";
import HeaderText from "../headerText";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation";

type HeaderProps = {
  heroImageUrl: ImageSourcePropType;
  headerInfo: ClubInfo;
  goBackIcon: string | null;
  navigation: NativeStackScreenProps<RootStackParamList> | null;
};

export interface ClubInfo {
  name: string;
  title: string | null;
  address: Address;
}

export interface Address {
  city: string;
  postalCode: string;
  street: string;
}

const Header = ({
  heroImageUrl,
  headerInfo,
  goBackIcon,
  navigation,
}: HeaderProps) => {
  return (
    <SafeAreaView>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <View style={GlobalStyles.container}>
        <HeroBackground imageSource={heroImageUrl} />
        <TopNavigation
          logoUrl={icons.logo}
          menuImageUrl={icons.menu}
          goBackIcon={goBackIcon}
          navigation={navigation}
        />
        <HeaderText headerInfo={headerInfo} />
      </View>
    </SafeAreaView>
  );
};

export default Header;
