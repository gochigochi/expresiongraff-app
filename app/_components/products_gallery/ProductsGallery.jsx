"use client"

import { useEffect, useRef, useState } from 'react'
import useAnimatePresence from '@/app/_hooks/useAnimatePresence'
import { AnimatePresence, motion } from 'framer-motion'
import Card from './Card'
import Buttons from './Buttons'

const ProductsGallery = ({ products, loading }) => {

    const containerRef = useRef()
    const swiperRef = useRef()
    const resizeObserver = useRef()
    const [cardWidth, setCardWidth] = useState()
    const [scrolled, setScrolled] = useState(0)
    const { show, setShow } = useAnimatePresence()

    const handleResize = () => {
        if (products) setCardWidth(swiperRef?.current.children[0].offsetWidth)
    }

    useEffect(() => {
        if (products && show) setCardWidth(swiperRef.current.children[0].offsetWidth)
    }, [products])

    useEffect(() => {

        if (swiperRef.current) {

            resizeObserver.current = new ResizeObserver(() => handleResize())
            resizeObserver.current.observe(swiperRef.current)

            return () => resizeObserver.current.disconnect()
        }
    }, [])

    return (
        <section
            className="
            w-full 
            flex 
            flex-col 
            mt-4 
            sm:mt-0 
            justify-start 
            items-center
            gap-0
            sm:gap-8
            "
        >
            <AnimatePresence>
                {
                    show ?
                        <motion.h2
                            className="text-2xl"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: .4 } }}
                            exit={{ opacity: 0, y: -10, transition: { duration: .2 } }}
                        >
                            Seleccione una prenda
                        </motion.h2> : null
                }
            </AnimatePresence>
            <div ref={containerRef} className="relative flex flex-col w-full">
                <div
                    ref={swiperRef}
                    className="
                    relative
                    flex 
                    scrollbar-hide
                    overflow-auto
                    snap-x
                    snap-mandatory
                    "
                >
                    <AnimatePresence>
                        {
                            show ?
                                <>
                                    {products?.map(product => {
                                        return <Card key={product.id} product={product} setShow={setShow} />
                                    })}
                                </> : null
                        }
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                    {
                        show ?
                            <Buttons swiperRef={swiperRef} cardWidth={cardWidth} setScrolled={setScrolled} scrolled={scrolled} /> : null
                    }
                </AnimatePresence>
            </div>
        </section>
    )
}

export default ProductsGallery