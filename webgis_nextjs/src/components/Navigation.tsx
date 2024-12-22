import * as React from "react";
import {
  AppNavBar,
  setItemActive
} from "baseui/app-nav-bar";
import {
  Upload
} from "baseui/icon";

export default () => {
  const [mainItems, setMainItems] = React.useState([
    {
      icon: Upload,
      label: "Layers"
    }
  ]);
  return (
    <AppNavBar
      title="Webmap"
      mainItems={mainItems}
      onMainItemSelect={item => {
        setMainItems(prev => setItemActive(prev, item));
      }}
      onUserItemSelect={item => console.log(item)}
    />
  );
}