"use client"
import { Inter } from '@next/font/google'
import styles from './home.module.css'

import { ImageSetDesc, TimedGallery } from './components/dynamic/gallery'

import withTimer from './components/compose/timer'

import { KeyedContent} from './components';


const inter = Inter({ subsets: ['latin'] })

function aboutMe() {
  return (
    <>
    <div className="py-8 space-y-2">
      <p>
        Hi! I'm Jake, a cloud software engineer and consultant out of Denver, Colorado (USA).
        I'm putting my skills to work to make the world a better place--I contribute to open source often,
        put out quality work for clients in my personal and professional work, and when tech fails, I volunteer
        to help out in other ways. If you're here to see what I can do, you're in the right place; this website
        is a sandbox for my skills and projects. Please enjoy, and if you would like to learn more or get in
        touch, my resume and GitHub can be found in the footer.
      </p>
    </div>
    </>
  )
}

function aboutSkills() {
  return (
    <>
    <div className="py-8 flex flex-col gap-y-8">
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
    <div className="py-8 flex flex-col gap-y-8">
      <p>I've accomplished a lot in my relatively short time as an engineer:</p>
      <ul className="list-disc">
        <li>Graduated with a 3.5 GPA from the University of Colorado Boulder in 2023</li>
        <li>Game Development Intern and Cloud Engineer at Virga Inc. for 1.5 years</li>
        <li>Consultant at Big Compass</li>
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
    ],
    fixedWidth: 300,
    fixedHeight: 500,
  }
}

export default function Home() {
  return (
    <>
      <div className="hero text-center lg:text-left">
        <div className="hero-content flex-col-reverse justify-center lg:flex-row-reverse gap-x-8">
          <TimedGallery desc={GalleryDesc()} interval={25000}/>
          <div>
            <About/>
          </div>
        </div>
      </div>
    </>
  )
}
