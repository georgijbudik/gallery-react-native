import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Gallery from "./pages/Gallery";
import Photo from "./pages/Photo";
import { Provider } from "react-redux";
import { store } from "./redux/photos/store";

export type RootStackParamList = {
  Gallery: undefined;
  Photo: { photo: { urls: { full: string } } };
};

export default function App() {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Gallery">
          <RootStack.Screen name="Gallery" component={Gallery} />
          <RootStack.Screen name="Photo" component={Photo} />
        </RootStack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
