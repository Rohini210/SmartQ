import React, { createContext, useState, useEffect } from "react"
import menu from "./menu.json"

export const FoodContext = createContext()

export const FoodProvider = (props) => {
  const [item, setItem] = useState([])
  
  useEffect(() => {
    const data = [menu]
    const temp = data.map((item) => item.menuDetails.EATORAMA)
    setItem(...temp)
  }, [])
  
  return <FoodContext.Provider value={[item, setItem]}>{props.children}</FoodContext.Provider>
}
