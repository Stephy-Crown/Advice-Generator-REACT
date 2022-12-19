import React from 'react'
import Card from './CardList'

const Cards = ({myUsers}) => {

  const personStyle={
    display:"grid",
    gridTemplateColumns:"1fr 1fr 1fr 1fr",
    marginLeft:"25px",
    gridGap:"50px",
    width:"1300px"
  

  }

  return (
    < div style={personStyle}>
    <Card PersonList={myUsers}/>
    </div>
  )
}

export default Cards