"use client"

import { useEffect, useRef, useState } from 'react'
import useAnimatePresence from '@/app/_hooks/useAnimatePresence'
import { AnimatePresence } from 'framer-motion'
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

    // useEffect(() => {
    //     console.table({
    //         scrolled,
    //         container: containerRef.current.scrollWidth,
    //         swiper: swiperRef.current.scrollLeft,
    //         swiperWidth: swiperRef.current.offsetWidth,
    //         swiperScrollWidth: swiperRef.current.scrollWidth
    //     })
    // }, [scrolled])

    console.log(show)

    return (
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
            <Buttons swiperRef={swiperRef} cardWidth={cardWidth} setScrolled={setScrolled} scrolled={scrolled}/>
        </div>
    )
}

export default ProductsGallery