import "@/styles/globals.css";
import "@/styles/style.css";
import { ThemeProvider } from "@material-tailwind/react";
import { NavigationBar } from "@/components/common/NavigationBar";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main className="font-primary-san bg-light">
        <NavigationBar />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
