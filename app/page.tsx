// "use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect } from "react";
import { frankRuhlLibre } from '@/app/ui/fonts';
import { Experiences } from "./ui/Experiences";
import { Projects } from "./ui/Projects";

export default function Home() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY; // Get the current scroll position
  //     const documentHeight = document.body.scrollHeight - window.innerHeight; // Calculate the total scrollable height
  //     const scrollPercent = scrollY / documentHeight; // Calculate the scroll percentage

  //     // Convert the scroll percentage to a color value
  //     const startColor = [255, 255, 255]; // RGB for white
  //     const endColor = [245, 238, 230]; // RGB for blue
  //     const newColor = startColor.map((start, i) => {
  //       const end = endColor[i];
  //       return Math.round(start + (end - start) * scrollPercent);
  //     });

  //     // Set the new background color
  //     document.documentElement.style.backgroundColor = `rgb(${newColor.join(',')})`;
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <main className={styles.main}>

      <div className={styles.intro}>
        <div className={styles.title}>Hi! I'm <span className={`${styles.name} ${frankRuhlLibre.className}`}>Jacob</span></div>
        <div className={styles.description}>
          I AM A SOFTWARE ENGINEER WHO SPECIALIZES IN CREATING <br />
          <span className={`${styles.highlight} ${frankRuhlLibre.className}`}>BEAUTIFUL FUNCTIONAL</span> <br />
          AND <br />
          <span className={`${styles.highlight} ${frankRuhlLibre.className}`}>UNIQUE</span> <br />
          WEB EXPERIENCES
        </div>
      </div>

      {/* <div id="about" className={styles.about}>

          <div className={styles.header}></div>
          <div className={styles.main_container}>
            <div className={styles.description}>
            I AM A HIGHLY DEDICATED AND WELL-ROUNDED MICHIGAN STATE UNIVERSITY ALUM WITH A BACHELORS OF SCIENCE IN COMPUTER SCIENCE. 

            </div>
            <div className={styles.portrait_container}>
              <Image 
              className={styles.portrait}
              src={"/Portrait.png"} 
              alt="Picture of me"
              width={300}
              height={300}
              />
            </div>
          </div>
      </div> */}

      <div id="experience" className={styles.experience}>
        <Experiences/>
      </div>

      <div id="projects" className={styles.projects}>
        <Projects/>
      </div>

      <div id="contact" className={styles.contact}>
        <div className="let_connect">Let's Connect</div>
        
      </div>
    </main>
  );
}
