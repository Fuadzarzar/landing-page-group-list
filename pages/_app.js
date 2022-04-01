import '../styles/globals.css'
import { RealViewportProvider } from "next-real-viewport"



export default function MyApp({ Component, pageProps }) {
  return (
    <RealViewportProvider>
      <Component {...pageProps} />
    </RealViewportProvider>
  )
}