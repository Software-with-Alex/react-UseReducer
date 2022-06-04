import { type } from '@testing-library/user-event/dist/type';
import React, {useEffect, useReducer} from 'react'


const Actions = {
    Increment: 'increment',
    Decremnt: 'decrement',

}

    function reducer(state, action){
        switch(action.type){
            case Actions.Increment:
                return {count: state.count + 1}
                case Actions.Decremnt:
                    return {count: state.count - 1}
        }
    }

   const UserInfo = () =>{

        //eventlisteners

      useEffect(() => {
          alert('button clicked')
      },[])
        const addFunction = () => {
            dispatch({type: Actions.Increment})
        }
        const subFunction = () => {
            dispatch({type: Actions.Decremnt})
        }

    const [state, dispatch] = useReducer(reducer, {count: 0})
        return(
            <div>
                <button onClick={subFunction}>-</button>
                <span>{state.count}</span>
                <button onClick={addFunction}>+</button>
            </div>
        )

   }

   export default UserInfo;

