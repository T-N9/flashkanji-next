import "@/styles/globals.css";
import "@/styles/style.css";
import { NextUIProvider } from "@nextui-org/react";
import { store } from '../store/store';
import { Provider } from 'react-redux';

/* Components */
import { NavigationBar } from "@/components/common/NavigationBar";
// import { Footer } from "@/components/common/Footer";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <main className="bg-white text-dark">
          <NavigationBar />
          <Component {...pageProps} />
          {/* <Footer/> */}
        </main>
      </NextUIProvider>
    </Provider>
  );
}
