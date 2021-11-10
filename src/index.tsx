import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { makeServer } from "./graphql/makeServer"

window.addEventListener("DOMContentLoaded", () => {
  makeServer()
  
  ReactDOM.render(<App />, document.getElementById("root"))
})
