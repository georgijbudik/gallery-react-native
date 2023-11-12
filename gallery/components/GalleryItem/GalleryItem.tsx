import { Card } from "react-native-paper";
import { FC } from "react";
import {
  Author,
  Description,
  GalleryItemView,
  SmallPhoto,
} from "./GalleryItem.styled";

interface GalleryItemProps {
  item: {
    user: {
      username: string;
    };
    description: string;
    urls: {
      thumb: string;
    };
  };
}

const GalleryItem: FC<GalleryItemProps> = ({
  item: { user, description, urls },
}) => {
  return (
    <GalleryItemView>
      <SmallPhoto source={{ uri: urls.thumb }} />
      <Card.Content style={{ flex: 1 }}>
        <Author>Author: {user.username}</Author>
        <Description>
          {description ? `Description: ${description}` : "No description"}
        </Description>
      </Card.Content>
    </GalleryItemView>
  );
};

export default GalleryItem;
