import { Image, View } from "react-native";
import { styles } from "../styles/styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { FC } from "react";

type PhotoProps = NativeStackScreenProps<RootStackParamList, "Photo">;

const Photo: FC<PhotoProps> = ({ route }) => {
  const {
    photo: { urls },
  } = route.params;
  return (
    <View>
      <Image source={{ uri: urls.full }} style={styles.bigPhoto} />
    </View>
  );
};

export default Photo;
