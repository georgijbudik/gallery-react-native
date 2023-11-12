import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Gallery from "../../screens/Gallery";
import Photo from "../../screens/Photo";

export type RootStackParamList = {
  Gallery: undefined;
  Photo: { photo: { urls: { full: string } } };
};

const Navigation = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Gallery">
        <RootStack.Screen name="Gallery" component={Gallery} />
        <RootStack.Screen name="Photo" component={Photo} />
      </RootStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default Navigation;
