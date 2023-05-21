import { useEffect } from "react"

const useTitle = title => {
  useEffect(() => {
    document.title = `${title} - Toy Street`;
  },[title])
}

export default useTitle;