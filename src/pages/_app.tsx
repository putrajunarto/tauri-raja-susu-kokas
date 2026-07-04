import "@/styles/globals.css";
import { UserProvider } from '../contexts/UserContext';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
    <UserProvider>
      <div className="appViewport">
        <div className="appFrame">
          <Component {...pageProps} />
        </div>
      </div>
    </UserProvider>
  );
}
