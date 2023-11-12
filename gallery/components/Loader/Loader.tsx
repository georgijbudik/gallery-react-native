import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { LoaderView } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderView>
      <ActivityIndicator
        animating={true}
        color={MD2Colors.blue700}
        size={"large"}
      />
    </LoaderView>
  );
};

export default Loader;
