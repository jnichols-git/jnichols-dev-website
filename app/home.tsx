"use client"
import { Inter } from '@next/font/google'
import styles from './home.module.css'

import { KeyedContent } from './components';

import {useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

function aboutMe() {
  return (
    <>
    <div>
      <p className="py-6">Hi! I'm a cloud software engineer and consultant out of Colorado, USA. I've been writing software for about 8 years, starting with text-based adventures written in Python and working my way up to where I am today.
      I'm always seeking opportunities to uplift and empower communities through software solutions--currently I've got my eye on the tech used to monitor and care for animals with specific environmental requirements.</p>
    </div>
    </>
  )
}

function aboutQualifications() {
  return (
    <>
    <div>
      <ul className="list-disc py-6">
        <li>Graduating with a bachelor's degree in Computer Science from the University of Colorado in May 2023. Courses include: Algorithms, Object Oriented Design, Theory of Computation, Public Speaking, Senior Capstone</li>
        <li>Proficiency in Golang, C/C++, Python, and Agile Development</li>
        <li>Familiarity with Kubernetes, Docker, AWS, JavaScript, TypeScript</li>
        <li>Strong leadership and communication skills</li>
      </ul>
    </div>
    </>
  )
}

function aboutFunFacts() {
  return (
    <>
    <div className="py-6">
      <p>I'm not just a software development machine. If you wanted that, you'd hire GPT. When I'm not at work or pursuing personal projects, you can also find me:</p>
      <ul className="list-disc">
        <li>Caring for a snake (Mars) and a gecko (Eggo), both of whom are very spoiled</li>
        <li>On a bike ride around Boulder when the weather is nice</li>
      </ul>
    
    </div>
    </>
  )
}

function About() {
  return KeyedContent(
    {
      keys: ["About the Person", "Qualifications", "Fun Facts"],
      contents: [
        aboutMe(),
        aboutQualifications(),
        aboutFunFacts(),
      ],
    }
  )
}

export default function Home() {

  return (
    <>
      <main className={styles.main}>
      <div className="hero min-h-screen w-10/12 bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <About/>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
