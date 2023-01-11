import { StatusBar,View, Text, SafeAreaView } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();
  StatusBar.setBarStyle('dark-content');

  return (isFocused ? <View style={{backgroundColor:props.background}}><SafeAreaView>
    <StatusBar backgroundColor={'#564'}translucent hidden={false} barStyle='dark-content' animated={true} {...props} />
  </SafeAreaView></View> : null);

};
export default FocusedStatusBar;
