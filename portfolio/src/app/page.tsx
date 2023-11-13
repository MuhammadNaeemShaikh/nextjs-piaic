'use client';

import Navbar from '@/components/Navbar';
import Hero from '../components/hero/hero';
import AboutMe from '@/components/about me/AboutMe';
import MySkills from '@/components/My Skills/MySkills';
import { motion, useScroll, useSpring } from 'framer-motion';
import Qualification from '@/components/qualification/Qualification';
import Services from '@/components/services/Services';
import { ServiceItem } from '@/utils/servicesItem';
import Contact from '@/components/contact/Contact';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar pageName="home" />
      <div className="mt-5 space-y-32" id="home">
        <Hero />
        <AboutMe />
        <MySkills />
        <Qualification
          id="qualification"
          title="qualification"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit
        quas deserunt atque accusamus quibusdam quaerat, repellendus incidunt
        necessitatibus? Corrupti voluptates alias aperiam consequuntur illum
        autem minima vero nobis saepe."
          degreetitle="Bachelor Degree"
          uniName="University of Sindh"
          completionYear="2018 - 2022"
          degreeContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit
          quas deserunt atque accusamus quibusdam quaerat, repellendus incidunt
          necessitatibus? Corrupti voluptates alias aperiam consequuntur illum
          autem minima vero nobis saepe."
        />
        <Qualification
          id="experience"
          title="experience"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit
        quas deserunt atque accusamus quibusdam quaerat, repellendus incidunt
        necessitatibus? Corrupti voluptates alias aperiam consequuntur illum
        autem minima vero nobis saepe."
          degreetitle="JUNIOR NODE JS DEVELOPER"
          uniName="Matz Solution"
          completionYear="1-APR-2023"
          degreeContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit
          quas deserunt atque accusamus quibusdam quaerat, repellendus incidunt
          necessitatibus? Corrupti voluptates alias aperiam consequuntur illum
          autem minima vero nobis saepe."
        />
        <Services
          title="My Services"
          body="We Provide Variety Of Services."
          ServiceItem={ServiceItem}
          id="myservice"
        />
        <Services
          title="My Projects"
          body=""
          ServiceItem={ServiceItem}
          id="projects"
        />
        <Contact />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
