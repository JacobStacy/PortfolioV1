'use client';

import Image from "next/image";
import styles from "./page.module.scss";
import { useEffect } from "react";
import { frankRuhlLibre } from '@/app/ui/fonts';

export default function Home() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY; // Get the current scroll position
  //     const documentHeight = document.body.scrollHeight - window.innerHeight; // Calculate the total scrollable height
  //     const scrollPercent = scrollY / documentHeight; // Calculate the scroll percentage

  //     // Convert the scroll percentage to a color value
  //     const startColor = [255, 255, 255]; // RGB for white
  //     const endColor = [252, 117, 117]; // RGB for blue
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

      <div id="about" className={styles.about}>

          <div className={styles.header}></div>
          <div className={styles.main_container}>
            <div className={styles.description}>
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT. SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FAGIT NULLA PAIRIATUR. EXCEPTEUR SINT OCCAEAT CUPIDITAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA DESERUNT MOLLIT 

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
      </div>

    </main>
  );
}
