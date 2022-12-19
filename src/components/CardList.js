import React from 'react'

//There are 2 ways to go about USING PROPS AS COMMENTED, OR ARROW FN
//USING PROPS---longer approach
// const CardList = (props) => {
//   const Persons=props.PersonList
//   console.log(props, Persons)

//STEP 2: You now Map the object variable Person.map()

// The ESG ARROW FN METHOD--easier way

const CardList = ({PersonList}) => {
  const personStyle={
    width:"100%",
    height:"100%"
  }
  const Persons=PersonList

  return (
    
    <>
      {
        Persons.map((person)=>(
          <div key={person.name} style={personStyle}>
            <img src={person.image} alt={person.alt} style={personStyle}/>
            <div>{person.name}</div>
            <div>{person.age}</div>

          </div>

        )

        )
      }
    </>
  )
}

export default CardList