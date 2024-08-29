import "../styles/globals.css";
import "../components/MultiSelectDropdown/multiselectdropdown.scss";
import "../components/ModalComponent/Modal.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
