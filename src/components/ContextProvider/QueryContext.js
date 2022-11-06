import React, { Children, createContext } from 'react';
import { useState } from 'react';



export const QueryListContext=createContext("");

const QueryContext = ({children}) => {

    const [querylist,setQueryList]=useState([]);
  return (
  <>
  <QueryListContext.Provider value={[querylist,setQueryList]}>
  {children}
  </QueryListContext.Provider>
  </>
  )
}

export default QueryContext;