import "../styles/tailwind.css";
import { useRouter } from "next/router";
import Loading from "./loading";
import { useEffect, useState } from "react";
import Transition from "./transition";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setLoading(!loading);
    };

    const handleLoading = () => {
      setLoading(!loading);
    };

    router.events.on("routeChangeStart", handleLoading);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleLoading);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, []);

  return (
    <Transition>
      {loading ? <Loading /> : <Component {...pageProps} />}
    </Transition>
  );
}

export default MyApp;
