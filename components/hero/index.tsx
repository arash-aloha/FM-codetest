import { ImageBackground, ImageSourcePropType, View } from "react-native";
import GlobalStyles from "../../styles/styles";

type HeaderBackgroundProps = {
  imageSource: ImageSourcePropType;
};

const HeroBackground = ({ imageSource }: HeaderBackgroundProps) => {
  return (
    <View style={GlobalStyles.image_overlay}>
      <ImageBackground
        source={imageSource}
        style={GlobalStyles.hero_image}
        resizeMode="cover"
      />
    </View>
  );
};

export default HeroBackground;
