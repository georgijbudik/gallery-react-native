import React, { FC, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos } from "../redux/photos/photoOperations";
import {
  selectError,
  selectIsLoading,
  selectPhotos,
} from "../redux/photos/selectors";
import { useNavigation } from "@react-navigation/native";
import GalleryItem from "../components/GalleryItem";
import Loader from "../components/Loader";
import { AppDispatch } from "../redux/photos/store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../components/Navigation/Navigation";

export interface IPhoto {
  id: string;
  user: {
    username: string;
  };
  description: string;
  urls: {
    thumb: string;
    full: string;
  };
}

const Gallery: FC = () => {
  const photos = useSelector(selectPhotos);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  return (
    <FlatList
      data={photos}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchPhotos} />
      }
      keyExtractor={(item) => item.id}
      renderItem={({ item }: { item: IPhoto }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Photo", {
              photo: item,
            })
          }
        >
          <GalleryItem item={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default Gallery;
