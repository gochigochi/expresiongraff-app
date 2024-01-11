import React from 'react'

const Buttons = ({ swiperRef, cardWidth, setScrolled, scrolled }) => {

    const handleSwipe = (direction) => {
        if (direction === "right") {
            swiperRef.current.scrollBy({ left: cardWidth, behavior: "smooth", })
            setScrolled(prev => prev + cardWidth)
        }
        if (direction === "left" && !(scrolled <= 0)) {
            swiperRef.current.scrollBy({ left: -cardWidth, behavior: "smooth", })
            setScrolled(prev => prev - cardWidth)
        }
    }

    return (
        <div>
            <button
            className="
            hidden
            md:block
            absolute
            top-1/2
            left-1
            shadow-md
            shadow-gray-300
            rounded-r-full
            bg-white
            p-4
            -translate-y-2/4
            z-10
            "
            onClick={() => handleSwipe("left")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </button>
            <button
            className="
            hidden
            md:block
            absolute
            top-1/2
            right-1
            shadow-md
            shadow-gray-300
            rounded-l-full
            bg-white
            p-4
            -translate-y-2/4
            "
            onClick={() => handleSwipe("right")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </div>
    )
}

export default Buttons