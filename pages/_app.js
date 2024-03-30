// pages/_app.js
import '../styles/globals.css'
import {NextUIProvider} from '@nextui-org/react'
import Nav from '../components/navbar/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Nav/>
      <Component {...pageProps} />
      
    </NextUIProvider>
  )
}

export default MyApp;