import "@/styles/globals.css";
import "@/styles/style.css";
import { ThemeProvider } from "@material-tailwind/react";
import { store } from '../store/store';
import { Provider } from 'react-redux';

/* Components */
import { NavigationBar } from "@/components/common/NavigationBar";
import { SwiperModal } from "@/components/swiper_modal/SwiperModal";
import { DetailModal } from "@/components/detail_modal/DetailModal";
import { Footer } from "@/components/common/Footer";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <main className="font-primary-san bg-light">
          <NavigationBar />
          <Component {...pageProps} />
          <SwiperModal/>
          <DetailModal/>
          <Footer/>
        </main>
      </ThemeProvider>
    </Provider>
  );
}
