import React, { useContext } from "react"
import { FoodContext } from "./FoodContext"

export default function NotAvail() {
  const [item, setItem] = useContext(FoodContext)
  return (
    <div className="show_all">
      {item.map((i) =>
        i.ofs === true ? (
          <div>
            <div className="show_all">
              <p>{i.foodname}</p>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  )
}
