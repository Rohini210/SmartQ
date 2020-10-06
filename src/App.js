import React, { useState, useEffect } from "react"
import "./App.css"
import menu from "./Components/menu.json"
import Home from "./Components/Home"

function App() {
  const [global, setGlobal] = useState([])
  const [item, setItem] = useState([])
  const [avail, setAvail] = useState([])
  const [notavail, setNotavail] = useState([])

  const checkAvail = () => {
    
  }
  useEffect(() => {
    const data = [menu]
    const temp = data.map((item) => item.menuDetails.EATORAMA)
    setItem(...temp)
    setGlobal(...temp)
    setAvail(item.filter(i => i.ofs === false).map(i => i.foodname))
    setNotavail(item.filter(i => i.ofs === true).map(i => i.foodname))
  }, [])

  console.log(avail)
  console.log(notavail)

  return (
    <div className="App">
      <Home global={global} item={item} setItem={setItem} avail={avail} notavail={notavail} />
    </div>
  )
}

export default App
