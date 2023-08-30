import React from 'react'
import VideoPlayer from './Video'
import caro from '../assets/images/carosel1.jpg'
const About = () => {
    return (
        <div>
            <VideoPlayer />

            <div className='about_section_1'>
                <div className='about-text'>
                    <h2>Who We Are</h2>
                    <p>
                        Megan Kenny, owner and designer of Kenny & Harlow, had a passion for design and sewing that began at a very young age when she first stepped on the pedals of her grandmother’s sewing machine. Clearly understanding her vision in life, she left school early to travel around the world and learn about the wonders of the sewing industry. She returned home from London in 1985 and opened a dressmaking and alterations store in Parnell. Word of her passion, skill, and excellent relationships with her clients spread rapidly, making her business thrive and gaining the trust of many. The team explored made-to-measure gowns created to perfection, leading her to open her own bridal gown label, Kenny & Harlow. This brand takes inspiration from her close relationships with her grandmother and granddaughter. And as they say, the rest is history.
                    </p>
                </div>
                <div className='about-image'>
                    <img src='https://www.galard.cz/uploads/photos/_banner/Jakub-Vadlejch-Galard-6.jpg' />
                </div>
            </div>

            <div className='about_section_1'>
                <div className='about-image'>
                    <img src='https://kennyandharlow.co.nz/wp-content/uploads/bg-what-we-do.jpg' />
                </div>
                <div className='about-text'>
                    <h2>Why Us</h2>
                    <p>
                    Kenny & Harlow reflects creativity and passion. Each detail is carefully selected, designed, and put together to maintain our standard of quality. Our bespoke gowns are created with love to fulfill our promise of providing our brides with the wedding of their dreams through our creations.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About