import { type FC } from "react";
import { Text, View } from "react-native";
import { registerRootComponent } from "expo";

import "../../global.css";

const App: FC = () => {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <Text className="mb-4 text-2xl font-bold text-blue-800">
        Native Template
      </Text>
      <Text className="mx-4 text-center text-lg text-gray-600">
        NativeWind is working! 🎉
      </Text>
      <View className="mt-6 rounded-lg bg-white p-4 shadow-lg">
        <Text className="font-semibold text-green-600">
          Tailwind CSS classes are applied
        </Text>
      </View>
    </View>
  );
};

registerRootComponent(App);
