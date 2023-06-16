"use client"
import { Inter } from '@next/font/google'
import styles from './home.module.css'

import { ImageSetDesc, TimedGallery } from './components/dynamic/gallery'

import withTimer from './components/compose/timer'

import { KeyedContent, Block} from './components';


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
        <li>Programming Languages: <b className="text-accent">Golang, C/C++, Python</b>, JavaScript, TypeScript, Java</li>
        <li>Development Tools: Linux/MacOS Environments, Git, GitHub CI/CD, Figma</li>
        <li>AWS Solutions: Compute (EC2, Lambda), Storage (S3, DynamoDB), Deployment (API Gateway, Amplify)</li>
        <li>Self-Hosted: MySQL, InfluxDB, Prometheus, Docker, Kubernetes</li>
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
        <li>Consultant at <b><a href="https://argano.com">Argano</a></b></li>
        <li>Maintainer on <b><a className="text-primary hover:underline" href="https://github.com/trickstercache/trickster">Trickster</a></b>, a reverse proxy cache for timeseries databases sponsored by the Cloud Native Computing Foundation (CNCF)</li>
        <li>Lead cloud engineer and communication manager for iSAT Capstone Team 22-23</li>
      </ul>
    
    </div>
    </>
  )
}

function About() {
  return KeyedContent(
    {
      keys: ["Skills", "Experience"],
      //keys: ["About", "Skills", "Experience"],
      contents: [
        //aboutMe(),
        aboutSkills(),
        aboutExperience(),
      ],
    }
  )
}

function valuesCommunity() {
  return (
    <>
    <div className="py-8 flex flex-col gap-y-8">
      <p>
        Software is special because of the people who use it. Good engineering means
        understanding the problems facing your community and looking for solutions,
        I'm working to build software by and for the
        community by focusing on decentralized platforms, and I actively work with
        local causes outside of the tech field.
      </p>
    </div>
    </>
  )
}
function valuesOpenAccess() {
  return (
    <>
    <div className="py-8 flex flex-col gap-y-8">
      <p>
        Diverse backgrounds make better communities and better solutions. Encouraging
        community/developer feedback and contribution is not just key to success, but
        key to building a world we can all love and enjoy. My personal work is and 
        will continue to be completely free and open source,
        with permissive contribution and feedback policies.
      </p>
    </div>
    </>
  )
}
function valuesQuality() {
  return (
    <>
    <div className="py-8 flex flex-col gap-y-8">
      <p>
        At the end of the day, I want to make good software. I'm genuinely passionate
        about making something that lasts, and so much of what I do at work and at home
        is about learning what makes a "good product". Every day I learn more about
        what I can do and what people need, and I'll keep applying those things to my
        work as I grow.
      </p>
    </div>
    </>
  )
}

function Values() {
  return KeyedContent (
    {
      keys: ["Community", "Quality", "Open Access"],
      contents: [
        valuesCommunity(),
        valuesQuality(),
        valuesOpenAccess(),
      ]
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
      <Block blockClass='' contentClass=''>
        <div className="grow flex flex-col content-start space-y-8">
          <h1>Hello.</h1>
          <p>
            My name is Jake. I'm a cloud consultant working from home in Denver with my pets,
            Mars and Eggo (the best boys) and music that's just a little too loud.
            At <b><a href="https://argano.com">Argano</a></b>, I'm learning to build digital foundations that make businesses better as part of
            their MuleSoft practice. In shorter terms, I move data around.
            When I'm not there, I contribute to open-source software and work on projects that interest me,
            practice taekwondo, and spend time outside getting to know the city a little better.
          </p>
        </div>
      </Block>
      <Block blockClass='' contentClass=''>
        <About/>
      </Block>
      <Block blockClass='' contentClass=''>
        <div className="basis-1/2 flex flex-col content-start space-y-8">
          <h1>Value-Driven</h1>
          <p>
            Every engineer that I've met has a reason to be doing what they do. I think it's
            important to know these reasons, because they often shape the decisions that we
            make with our work. Commitments to <i>community</i>, <i>quality</i>, and
            <i>open access</i> drive my work and keep me motivated.
          </p>
        </div>
        <Values/>
      </Block>
    </>
  )
}
