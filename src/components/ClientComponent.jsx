"use client"

import ServerComponent from "./ServerComponent";


const ClientComponent = ({children}) => {
    console.log("This is client component");
  return (
    <div>
      clientComponent
      {children}
    </div>
  )
}

export default ClientComponent
