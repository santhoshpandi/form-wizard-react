import { createContext, useContext, useEffect, useState } from "react";


// Context Creation
export const PageContext = createContext()

// Context Provider
export function PageProvider({ children }) {
  

  const [page, setPage] = useState('BasicInfo')
  const [data, setData] = useState({
    name: '', email: '', interests: {
      sports: {
        interest: false,
        favourite:[]
      },
      music: {
        interest: false,
        favourite:[]
      },
    }
  })
  const [able, setAble] = useState(true)

  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('dta'))
    if(storedData) setData(storedData)
    setHasLoaded(true)
  }, [])
  
  useEffect(() => {
    if(hasLoaded) localStorage.setItem('dta',JSON.stringify(data))
  }, [data, hasLoaded])
  
  const resetData = () => {
      setData({
        name: '', email: '', interests: {
          sports: {
            interest: false,
            favourite:[]
          },
          music: {
            interest: false,
            favourite:[]
          },
        }
      })
    }

  return (
    <PageContext.Provider value={{ page, setPage, data, setData, able, setAble, resetData }}>
      {children}
    </PageContext.Provider>
  )
}

// Use Context
export function usePage() {
  return useContext(PageContext)
}