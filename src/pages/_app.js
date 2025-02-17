import "@/styles/globals.css";
import { ThemeProvider } from "@/context/themeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
 
}
