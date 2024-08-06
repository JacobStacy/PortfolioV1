// "use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect } from "react";
import { frankRuhlLibre } from '@/app/ui/fonts';
import { Experiences } from "./ui/Experiences";
import { Projects } from "./ui/Projects";
import { ContactButton } from "./ui/ContactButton";

export default function Home() {

  return (
    <main className={styles.main}>

      <div className={styles.intro}>
        <div className={styles.title}>Hi! I'm <span className={`${styles.name} ${frankRuhlLibre.className}`}>Jacob</span></div>
        <div className={styles.description}>
          I AM A SOFTWARE ENGINEER WHO SPECIALIZES IN CREATING <br />
          <span className={`${styles.highlight} ${frankRuhlLibre.className}`}>BEAUTIFUL</span> <br/>
          <span className={`${styles.highlight} ${frankRuhlLibre.className}`}>
            <span aria-hidden="true" className={`${styles.glitch_mask}`}>FUNCTIONAL</span>
              FUNCTIONAL
            <span aria-hidden="true" className={`${styles.glitch_mask}`}>FUNCTIONAL</span>
          </span>
           AND <br /> 
          <span className={`${styles.highlight} ${frankRuhlLibre.className}`}>UNIQUE</span> 
          WEB EXPERIENCES
        </div>
      </div>

      <div id="experience" className={styles.experience}>
        <Experiences/>
      </div>

      <div id="projects" className={styles.projects}>
        <Projects/>
      </div>

      <div id="contact" className={styles.contact}>
        <div className={styles.lets_connect}>Let's <br/>Connect</div>
        <div className={styles.contact_buttons}>
          <ContactButton href="./Jacob R. Stacy - Resume.pdf">RESUME</ContactButton>
          <ContactButton href="https://www.linkedin.com/in/jacobrstacy/">LINKEDIN</ContactButton>
          <ContactButton href="https://github.com/JacobStacy">GITHUB</ContactButton>
          <ContactButton href="mailto:jacborstacy@gmail.com?body=Hi%20Jacob!">EMAIL</ContactButton>
          <ContactButton href="sms:+17347717563?body=Hi%20Jacob!">PHONE</ContactButton>
        </div>
      </div>

    {/* <div className={styles.copyright}>© Jacob R. Stacy</div> */}
    </main>
  );
}
