import React, { Component } from 'react';

class SetStateCounter extends Component {

    state = {
        counter: 0
    }

    // ! If you need to update state from the old state 

    // ! B/c some other component / method may call set state, having a counter like this is not safe
    // ! since the value of the counter may mutate before setState executes resulting in code that 
    // ! isn't utilizing the correct state

    // ? setState runs asynchronously, aka waits for some trigger then it executes

    // ? don't do this...
    updateCounter = () => {
        this.setState( { counter: this.state.counter + 1 } )
    }

    // ? do this...
    // * you should rely on the previous state to protect against prop mutation
    // * this is the better approach
    updateCounterCORRECT = () => {
        this.setState(
            (prevState) => {
                return {
                    counter: prevState.counter + 1;
                }
            }
        )
    }
}

export default SetStateCounter;