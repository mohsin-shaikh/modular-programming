import { AppWrapper } from "../context/state";
import "antd/dist/antd.css";

function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>);
}

export default App
