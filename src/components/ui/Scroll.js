import React, { useEffect, useState } from 'react'

export default function Scroll() {
    const [BackToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 120) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top:0, 
            behavior:"smooth"
        })
    }
  return (
    <>
        <div className="scroll">
            {
                BackToTopButton && (
                    <button onClick={scrollUp} className='btn btn-primary px-3 py-1 text-white fw-bolder fs-2'><i class="fa-sharp fa-solid fa-arrow-up"></i></button>
                )
            }
        </div>
    </>
  )
}
