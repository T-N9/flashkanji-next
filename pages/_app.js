import "@/styles/globals.css";
import "@/styles/style.css";
import { ThemeProvider } from "@material-tailwind/react";
import { store } from '../store/store';
import { Provider } from 'react-redux';

/* Components */
import { NavigationBar } from "@/components/common/NavigationBar";
import { Footer } from "@/components/common/Footer";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <main className="bg-white">
          <NavigationBar />
          <Component {...pageProps} />
          <Footer/>
        </main>
      </ThemeProvider>
    </Provider>
  );
}
