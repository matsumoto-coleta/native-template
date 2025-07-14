import { type FC } from "react";
import { View } from "react-native";
import { registerRootComponent } from "expo";

const App: FC = () => {
  return <View>Native Template</View>;
};

registerRootComponent(App);
