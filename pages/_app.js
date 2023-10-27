import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { NavigationBar } from "@/components/common/NavigationBar";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main className="container mx-auto">
        <NavigationBar />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
