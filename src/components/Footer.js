import React from 'react'
import linkedinlogo from '../images/linkedinreal.svg'
import githublogo from '../images/githubreal.svg'
import maillogo from '../images/mailreal.svg'
import twitterlogo from '../images/twitterreal.svg'


export default function Footer() {
    return(
        <footer className='footer'>
            <ul>
                <li><a href='https://github.com/LucasFaustman'><img src={githublogo}/></a></li>
                <li><a href="https://www.linkedin.com/in/lucasfaustman/"><img src={linkedinlogo}/></a></li>
                <li><a href="https://twitter.com/lucasfaustman"><img src={twitterlogo}/></a></li>
                <li><a href="mailto:lucasfaustman@gmail.com"><img 
                src={maillogo}/></a></li>
            </ul>
        </footer>
    )
}