import { Platform, StatusBar,View, Text, NativeModules } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
const FocusedStatusBar = (
  {
    backgroundColor,
    barStyle = "dark-content",
    //add more props StatusBar
  }
) => {
   const insets = useSafeAreaInsets();
   const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? insets.top: 0;
   const isFocused = useIsFocused();

   let height = STATUSBAR_HEIGHT;
   return ( isFocused ?
     <View style={{ height, backgroundColor,}}>
        <StatusBar
          animated={true}
          backgroundColor={backgroundColor}
          barStyle={barStyle} />
     </View> : null
   );
}
export default FocusedStatusBar;
