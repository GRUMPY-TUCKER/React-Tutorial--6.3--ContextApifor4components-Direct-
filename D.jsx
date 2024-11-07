import React from 'react'
import {GreetContext,Greet2Context} from './A';

const D = (props) => {
  return (
    <div>
        <GreetContext.Consumer>{(val)=>{
            return (<Greet2Context.Consumer>{(val2)=>{
                return <h1>Greet : {val} {val2} </h1>
            }}
            </Greet2Context.Consumer>)
        }}
        </GreetContext.Consumer>
        <Greet2Context.Consumer>{(val)=>{
            return <h1>Greet : {val} </h1>
        }}
        </Greet2Context.Consumer>
    </div>
  )
}

export default D