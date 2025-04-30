import "@/styles/globals.css";
import { UserProvider } from '../contexts/UserContext';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
