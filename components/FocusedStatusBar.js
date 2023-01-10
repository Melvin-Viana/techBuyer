import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";
import { useId } from "react";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;

};
export default FocusedStatusBar;
