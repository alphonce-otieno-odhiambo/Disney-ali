import '../styles/globals.css'
import { AuthContextProvider } from '../contextApi/userAuth'

function MyApp({ Component, pageProps: { ...pageProps} }) {
  return (
    <AuthContextProvider >
       <Component {...pageProps} />
    </AuthContextProvider>
  )
  
 
}

export default MyApp
