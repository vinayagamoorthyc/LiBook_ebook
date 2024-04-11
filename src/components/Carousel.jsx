import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarousel,CCarouselItem,CImage } from '@coreui/react'
import "./Carousel.css"

export default function Carousel() {
  return (
    <center>
        <CCarousel transition="crossfade" className='carousel_main' indicators>
            <CCarouselItem>
                <CImage className="a-block w-100" src={"https://static.vecteezy.com/system/resources/previews/021/916/224/non_2x/promo-banner-with-stack-of-books-globe-inkwell-quill-plant-lantern-ebook-world-book-day-bookstore-bookshop-library-book-lover-bibliophile-education-for-poster-cover-advertising-vector.jpg"} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={"https://static.vecteezy.com/system/resources/previews/023/107/441/original/promo-banner-with-with-reading-stack-of-books-lantern-with-candle-plant-school-books-pile-world-book-day-bookstore-bookshop-library-book-lover-bibliophile-education-for-poster-cover-vector.jpg"} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={"https://static.vecteezy.com/system/resources/previews/023/107/446/non_2x/promo-sale-banner-with-reading-stack-of-books-wooden-letter-tiles-school-books-pile-world-book-day-bookstore-bookshop-library-book-lover-bibliophile-education-a4-for-poster-cover-vector.jpg"} alt="slide 3" />
            </CCarouselItem>
        </CCarousel>
    </center>
  )
}
