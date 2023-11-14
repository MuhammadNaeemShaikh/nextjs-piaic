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
      <motion.div className="progress-bar -z-0" style={{ scaleX }} />

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
          degreeContent="I pursued my Bachelor's Degree at the University of Sindh from 2018 to 2022. During this period, I gained comprehensive knowledge in various subjects, honed my critical thinking skills, and participated in diverse academic activities. The experience provided a solid foundation for my professional journey and shaped my passion for continuous learning and growth."
          collegeDegreetitle="Intermediate"
          collegeName="New Ali Garh College"
          collegeCompletionYear="2015-2017"
          collegeContent="During my intermediate studies at New Ali Garh College from 2015 to 2017, I delved into various subjects that laid the groundwork for my academic and personal development. Engaging with diverse learning opportunities and collaborative projects, I honed my analytical skills and cultivated a passion for continuous education. This period was pivotal in shaping my academic journey and fostering a commitment to excellence in my pursuits."
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
          completionYear="1-APR-2023 PRESENT"
          degreeContent="I am currently employed as a junior Node.js developer, where I contribute to the development and maintenance of web applications, ensuring their functionality and performance meet the required standards."
          collegeDegreetitle="PHP TRAINEE"
          collegeName="HIDAYA INSTitiute of science and technology"
          collegeCompletionYear="2022-FEB - 2022-MAY"
          collegeContent="As a PHP Trainee at HIDAYA Institute of Science and Technology from February to May 2022, I actively engaged in hands-on training to enhance my skills in PHP development. During this period, I worked on real-world projects, collaborated with experienced professionals, and gained practical insights into web development. This experience allowed me to apply theoretical knowledge to real-world scenarios, contributing to my growth as a PHP developer and paving the way for a promising career in the field."
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
