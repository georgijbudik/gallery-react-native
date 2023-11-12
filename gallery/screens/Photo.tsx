import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../components/Navigation/Navigation";
import { FC } from "react";
import { BigPhoto } from "./Photo.styled";

type PhotoProps = NativeStackScreenProps<RootStackParamList, "Photo">;

const Photo: FC<PhotoProps> = ({ route }) => {
  const {
    photo: { urls },
  } = route.params;
  return (
    <View>
      <BigPhoto source={{ uri: urls.full }} />
    </View>
  );
};

export default Photo;
