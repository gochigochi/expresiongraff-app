import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Button from './Button'
import Menu from './Menu'

const ContactMenu = () => {

    const [show, setShow] = useState(false)

    return (
        <div className="relative">
            <Button onClick={() => setShow(!show)} />
            <AnimatePresence>
                {show ? <Menu setShow={setShow} /> : null}
            </AnimatePresence>
        </div>
    )
}

export default ContactMenu