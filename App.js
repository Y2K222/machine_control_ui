import React from "react"
import { decode, encode } from "base-64"
import Stroage from "./src/storage"
import Config from "./src/config"
import { Provider } from "react-redux"
import Store from "./src/store"
import Navigator from "./src/navigator/Navigator"

// Config encode & decode
if (!global.btoa) global.btoa = encode
if (!global.atob) global.atob = decode

// Main application
const App = () => {

  return (
    <Provider store={Store} >
      <Navigator />
    </Provider>
  )

}

export default App
