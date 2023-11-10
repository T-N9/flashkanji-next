import "@/styles/globals.css";
import "@/styles/style.css";
import { ThemeProvider } from "@material-tailwind/react";
import { NavigationBar } from "@/components/common/NavigationBar";
import { store } from '../store/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <main className="font-primary-san bg-light">
          <NavigationBar />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </Provider>
  );
}
