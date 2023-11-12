import { View, Image } from "react-native";
import { Paragraph, Title } from "react-native-paper";
import styled from "styled-components";

export const GalleryItemView = styled(View)`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  flex-direction: row;
  align-items: center;
`;

export const SmallPhoto = styled(Image)`
  height: 70px;
  width: 70px;
  border-radius: 10px;
`;

export const Description = styled(Paragraph)`
  flex: 1;
  flex-wrap: wrap;
`;

export const Author = styled(Title)`
  font-weight: bold;
`;
