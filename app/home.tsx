"use client"
import { Inter } from '@next/font/google'
import styles from './home.module.css'

import { TimedGallery, ImageSetDesc } from './components/dynamic/gallery'

import { KeyedContent} from './components';

import Image from 'next/image'

import {useState} from 'react'
import { classText } from './style/text';

const inter = Inter({ subsets: ['latin'] })

function aboutMe() {
  return (
    <>
    <div className="py-6">
      <p>Hi! I'm a cloud software engineer and consultant out of Colorado, USA. I've been writing software for about 8 years, starting with text-based adventures written in Python and working my way up to where I am today.
      I'm always seeking opportunities to uplift and empower communities through software solutions--currently I've got my eye on the tech used to monitor and care for animals with specific environmental requirements.</p>
    </div>
    </>
  )
}

function aboutSkills() {
  return (
    <>
    <div className="py-6 flex flex-col gap-y-6">
      <p>My experience in academics, internships, jobs, and personal work has given me a strong skillset for cloud development and consulting. Skills I'm particularly proficient in are <b className="text-accent">highlighted</b>.</p>
      <ul className="list-disc">
        <li>Programming Languages: <b className="text-accent">Golang, C/C++, Python</b>, JavaScript, TypeScript, Java, SQL</li>
        <li>Development Tools: <b className="text-accent">Linux/MacOS Environments</b>, GitHub, Docker, Figma </li>
        <li>Cloud Architecture: AWS, Kubernetes</li>
        <li>Soft Skills: <b className="text-accent">Technical Communication, Public Speaking</b>, Leadership, Project Management</li>
      </ul>
    </div>
    </>
  )
}

function aboutExperience() {
  return (
    <>
    <div className="py-6 flex flex-col gap-y-6">
      <p>I've accomplished a lot in my relatively short time as an engineer:</p>
      <ul className="list-disc">
        <li>Graduating with a 3.5 GPA from the University of Colorado Boulder in 2023</li>
        <li>Game Development Intern and Cloud Engineer at Virga Inc. in Denver for 1.5 years</li>
        <li>Key contributor to <a className="text-primary hover:underline" href="https://github.com/trickstercache/trickster">Trickster</a>, a reverse proxy cache for timeseries databases sponsored by the Cloud Native Computing Foundation (CNCF)</li>
        <li>Lead cloud engineer and communication manager for iSAT Capstone Team 22-23</li>
      </ul>
    
    </div>
    </>
  )
}

function About() {
  return KeyedContent(
    {
      keys: ["About", "Skills", "Experience"],
      contents: [
        aboutMe(),
        aboutSkills(),
        aboutExperience(),
      ],
    }
  )
}

function GalleryDesc (): ImageSetDesc  {
  return {
    srcs: [
      {
        url: "/headshot.jpg",
        alt: "Professional headshot",
      },
      {
        url: "/sko.jpg",
        alt: "Sko buffs!",
      },
      {
        url: "/spain.jpg",
        alt: "More casual vacation picture",
      }
    ],
    fixedWidth: 300,
    fixedHeight: 500,
  }
}

export default function Home() {
  return (
    <>
      <div className="hero text-center lg:min-h-screen lg:text-left">
        <div className="hero-content flex-col-reverse justify-center lg:flex-row-reverse gap-x-6">
          <TimedGallery desc={GalleryDesc()} interval={25000}/>
          <div>
            <About/>
          </div>
        </div>
      </div>
    </>
  )
}
