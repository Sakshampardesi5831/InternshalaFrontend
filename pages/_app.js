import '@/styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {store} from "../store/store"
import {Provider} from 'react-redux'
export default function App({ Component, pageProps }) {
  return( 
  <Provider store={store} >
    <Component {...pageProps} />
  </Provider>
  )
}
