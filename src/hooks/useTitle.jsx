import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
     
        document.title = `CreatureCove | ${title}`
    },[title])
}

export default useTitle;