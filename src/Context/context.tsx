import React, { createContext, useState } from 'react'

export const AppContext = createContext<any>(undefined);

function Context(props: any) {

   const contextValue = {
    inputValue: '',
    message: props.message,
   }

   const [state, setState] = useState(contextValue)

  return (
    <AppContext.Provider value={{state: state, setState: setState}}>
        {props.children}
    </AppContext.Provider>
  )
}

export default Context
