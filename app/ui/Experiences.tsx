
import styles from "./experiences.module.scss";
import { frankRuhlLibre } from '@/app/ui/fonts';


const experiences = [
    {
        title: "MSU RS&GIS",
        position: "Full Stack Web Developer",
        start: "August 2022",
        end: "Present",
        points: [
            "Redesigning user interfaces, implementing new functionalities, and deploying features seamlessly across various websites using Laravel, Next.JS, and Cascade CMS with vanilla JavaScript.",
            "Weekly meetings with clients and designers to ensure alignment with both aesthetic goals and technical requirements.",
            "Comprehensively overhauled several MSU Healthcare related sites, collaborating effectively with clients while maintaining creative direction. The improved sites boast user-centric interfaces and modern aesthetics, positioning MSU Healthcare for increased patient acquisition.",
            "Overhauled MSU Healthcare's main navigation and key UI elements to enhance user experience and streamline data entry processes, resulting in a more user-friendly platform and reduced workload for the client."
        ]
    },
    {
        title: "MSU RS&GIS (Internship)",
        position: "Software Engineering Intern",
        start: "April 2022",
        end: "August 2022",
        points: [
            "Tasked with taking existing Arc GIS models and converting the models to python. Then streamlining the scripts to decrease processing times on large geographical data sets with more than 40,000 entries.",
            "Devised an innovative workaround for a critical memory leak in ArcGIS geo-processor, slashing individual processing time by 50% and eliminating script crashes, resulting in a multi-week reduction in total processing time."
        ]
    }
  ];

export function Experiences(){
    return (
        <>
            <div className={`${styles.header} ${frankRuhlLibre.className}`}>
            Experience
            </div>
            <div className={styles.experience_container}>
                {experiences.map((experience) => {
                    return(
                        <Experience 
                        title={experience.title}
                        position={experience.position}
                        start={experience.start}
                        end={experience.end} 
                        points={experience.points}/>
                    );
                })}
            </div>
        </>
    )
}



export function Experience({
    title,
    position,
    start,
    end,
    points
  }: {
    title: string;
    position: string;
    start: string;
    end: string;
    points: Array<string>;
  }) {

    return(
        <div className={styles.experience}>
            <div className={`${frankRuhlLibre} ${styles.title}`}>{title}</div>
            <div className={styles.position}>{position} | {start} - {end}</div>
            <ul className={styles.points}>
                {points.map((point) => {
                    return (
                        <li>{point}</li>
                    );
                })}
            </ul>
        </div>
    );


}

