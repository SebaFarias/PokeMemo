import AppBar from "~/components/AppBar/AppBar";
import PokeFooter from "~/components/Footer/PokeFooter";
import UserSessionProvider from "~/components/UserSessionProvider";
import { PokeContextProvider } from "~/components/PokeSessionContext";
import "~/styles/globals.css";

export default function RootLayout ({
  children,
}:{
  children: React.ReactNode
}) {
  return(
    <html lang="en">
      <body>
        <UserSessionProvider>
        <PokeContextProvider>
          <AppBar/>
          <main className="min-h-[90vh] flex">
            {children}
          </main>
          <PokeFooter/>
        </PokeContextProvider>
        </UserSessionProvider>
      </body>
    </html>
  )
}