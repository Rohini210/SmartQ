import React from "react"
import "./App.css"
import { FoodProvider } from "./Components/FoodContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Components/Home"
import All from "./Components/All"
import Avail from "./Components/Avail"
import NotAvail from "./Components/NotAvail"

function App() {
  return (
    <Router>
      <FoodProvider>
        <div className="App">
          <Switch>
            <Route path="/all" exact component={All} />
            <Route path="/avail" component={Avail} />
            <Route path="/notavail" component={NotAvail} />
          </Switch>
          <Home />
        </div>
      </FoodProvider>
    </Router>
  )
}

export default App
