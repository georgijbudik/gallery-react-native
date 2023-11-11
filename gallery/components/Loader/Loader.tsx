import { View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const Loader = () => {
  return (
    <View
      style={{
        paddingTop: 300,
      }}
    >
      <ActivityIndicator
        animating={true}
        color={MD2Colors.blue700}
        size={"large"}
      />
    </View>
  );
};

export default Loader;
