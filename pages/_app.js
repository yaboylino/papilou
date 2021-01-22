import "../styles/index.css"
import "../styles/home.scss"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"
import "swiper/components/lazy/lazy.scss"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "../redux/reducers"
import { Provider as AuthProvider } from "next-auth/client"

const store = createStore(rootReducer)

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )
}

export default MyApp

// import "../styles/index.css"
// import { Provider } from "react-redux"
// import { createStore } from "redux"
// import rootReducer from "../redux/reducers"

// // convert object to string and store in localStorage
// function saveToLocalStorage(state) {
//   try {
//     const serialisedState = JSON.stringify(state)
//     localStorage.setItem("persistantState", serialisedState)
//   } catch (e) {
//     console.warn(e)
//   }
// }

// // load string from localStarage and convert into an Object
// // invalid output must be undefined
// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem("persistantState")
//     if (serialisedState === null) return undefined
//     return JSON.parse(serialisedState)
//   } catch (e) {
//     console.warn(e)
//     return undefined
//   }
// }

// // create our store from our rootReducers and use loadFromLocalStorage
// // to overwrite any values that we already have saved
// const store = createStore(rootReducer, loadFromLocalStorage())

// // listen for store changes and use saveToLocalStorage to
// // save them to localStorage
// store.subscribe(() => saveToLocalStorage(store.getState()))

// function MyApp({ Component, pageProps }) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }

// export default MyApp
