import React from 'react'

const Main = (props) => {
  return (
    <div>
        {/* Main - {props.isAvaliable ? "uygundur" : "uygun deyil"} */}
        {/* main - {props.isAvaliable && "salam" } */}
        main - {props.isAvaliable || "salam" }
        </div>
  )
}

export default Main