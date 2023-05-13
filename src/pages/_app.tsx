import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "~/utils/api";
import { Montserrat } from "next/font/google";
import "~/styles/globals.css";
import Navbar from "~/components/header/Header";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <div className={montserrat.className}>
      <SessionProvider session={session}>
        <Navbar />
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
