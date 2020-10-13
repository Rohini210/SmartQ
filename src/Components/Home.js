import React from "react"
import { Link } from "react-router-dom"

export default function Home() {  
  return (
    <div className="home">
      <Link to="/all">
        <button>All</button>
      </Link>
      <Link to="/avail">
        <button>Available</button>
      </Link>
      <Link to="/notavail">
        <button>NotAvailable</button>
      </Link>
    </div>
  )
}
