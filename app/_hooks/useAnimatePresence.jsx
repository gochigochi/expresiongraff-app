import { useState, useEffect } from 'react'

const useAnimatePresence = () => {

  const [show, setShow] = useState(false)

  useEffect(() => setShow(true), [])

  return { show, setShow }
}

export default useAnimatePresence