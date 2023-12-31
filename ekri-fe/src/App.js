import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navigator from "./Navigator";

function App() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
