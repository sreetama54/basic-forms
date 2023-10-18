import React from 'react'

export default function Home(props) {
  return (
    <div>
       <h1>{props.message}</h1> 
       <h2>{props.name}</h2></div>
  )
}
