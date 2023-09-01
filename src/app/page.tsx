import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import Intro from './sub-sections/home/intro/Intro';

import './main.css'

export default function Home() {


  return (
    <main className="main page-home">
       <Intro />
    </main>
  )
}
