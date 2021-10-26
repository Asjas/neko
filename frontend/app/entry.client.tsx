import ReactDOM from "react-dom";
import { RemixBrowser } from "remix";

ReactDOM.hydrate(<RemixBrowser />, document);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // we will register it after the page complete the load
    void navigator.serviceWorker.register("/sw.js");
  });
}
