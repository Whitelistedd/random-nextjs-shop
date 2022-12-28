import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import Layout from "../Layout";
import { Provider } from "react-redux";
import { wrapper } from "@/redux/store";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props} />
      </Layout>
    </Provider>
  );
}

export default App;
