import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import Intro from './sub-sections/home/intro/Intro';
import About from './sub-sections/home/about/About';
import Projects from './sub-sections/home/projects/Projects';
import './main.css'

export default function Home() {


  return (
    <main className="main page-home">
       <Intro />
       <About />
       <Projects />
    </main>
  )
}
