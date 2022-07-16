import React from 'react'
import mephoto from '../images/me.jpeg'
import infolinkedinlogo from '../images/linkedin.svg'
import infomaillogo from '../images/mail.svg'

export default function Info() {
    return (
        <section className='info--section'>
            <img className ='hero--image' src={mephoto} />
            <h1> Lucas Faustman </h1>
            <h2> Full-Stack Software Developer </h2>
            <span> lucasfaustman.com </span>
            <section className = 'button--section'>
                <a  className ='email--button' href="mailto:lucasfaustman@gmail.com"><img src={infomaillogo}/>Email</a>
                <a className ='linkedin--button' href="https://www.linkedin.com/in/lucasfaustman/"><img src={infolinkedinlogo}/>LinkedIn</a>
            </section>
        </section>
    )
}