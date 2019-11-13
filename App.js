console.ignoredYellowBox = ["Remote debugger"];
import { YellowBox } from "react-native";
// import store from "./screens/store/";
// import { Provider } from "react-redux";
YellowBox.ignoreWarnings([
  "Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?"
]);

import React from "react";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return <HomeScreen />;
}
