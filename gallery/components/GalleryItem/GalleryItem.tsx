import { View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { styles } from "../../styles/styles";
import { FC } from "react";

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
    <View style={styles.container}>
      <Card style={{ ...styles.margin, width: 350 }}>
        <Card.Content style={styles.margin}>
          <Title style={{ fontWeight: "bold" }}>Author: {user.username}</Title>
          <Paragraph>
            {description ? `Description: ${description}` : "No description"}
          </Paragraph>
        </Card.Content>
        <View style={styles.container}>
          <Card.Cover source={{ uri: urls.thumb }} style={styles.smallPhoto} />
        </View>
      </Card>
    </View>
  );
};

export default GalleryItem;
