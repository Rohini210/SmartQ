import React from "react"
import All from "./All"

export default function Home({ item, setItem, avail, notavail, global }) {
  const showAllData = () => {
    setItem(global)
  }

  const updateAvail = () => {
    setItem(avail)
  }

  const updateUnavail = () => {
    setItem(notavail)
  }

  return (
    <div>
      <button onClick={showAllData}>All</button>
      <button onClick={updateAvail}>Available</button>
      <button onClick={updateUnavail}>NotAvailable</button>
      {item.map((data) => (
        <All foodname={data.foodname} foodid={data.foodid} ofs={data.ofs} />
      ))}
    </div>
  )
}
