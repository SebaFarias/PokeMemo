import AppBar from "~/components/AppBar/AppBar";
import PokeFooter from "~/components/Footer/PokeFooter";
import PokeSessionProvider from "~/components/PokeSessionProvider";
import "~/styles/globals.css";

export default function RootLayout ({
  children,
}:{
  children: React.ReactNode
}) {
  return(
    <html lang="en">
      <body>
        <PokeSessionProvider>
          <AppBar/>
          <main className="min-h-[90vh] flex">
            {children}
          </main>
          <PokeFooter/>
        </PokeSessionProvider>
      </body>
    </html>
  )
}