
import styles from "./experiences.module.scss";
import { frankRuhlLibre } from '@/app/ui/fonts';


const experiences = [
    {
        title: "MSU RS&GIS",
        position: "Full Stack Web Developer",
        start: "August 2022",
        end: "Present",
        points: [
            "Redesigned user interfaces, implemented new functionalities, and deployed features seamlessly across various websites using Next.JS, Laravel, and Cascade CMS with vanilla JavaScript.",
            "Developed and integrated RESTful APIs to facilitate data exchange and enhance functionality across applications, ensuring robust and efficient backend support.",
            "Conducted weekly client and designer meetings to align technical requirements with aesthetic goals, fostering clear communication and consistent project success.",
            "Designed and implemented reusable UI components, which were adopted across various company projects, significantly improving development speed, maintaining design consistency, and reducing duplicated efforts across teams.",
            "Comprehensively overhauled several client sites, collaborating effectively with clients while maintaining creative direction. The improved sites boast user-centric interfaces and modern aesthetics, positioning our client for increased patient acquisition.",
            "Overhauled key UI elements and data entry processes to create more intuitive workflows, resulting in a 20% reduction in user errors and a 15% increase in site engagement.",
            "Executed full-scale site revamps that increased patient acquisition by 10% for our clients, by optimizing sites for performance and modernizing interfaces to meet industry standards."
        ]
    },
    {
        title: "MSU RS&GIS (Internship)",
        position: "Software Engineering Intern",
        start: "April 2022",
        end: "August 2022",
        points: [
            "Tasked with taking existing Arc GIS models and converting the models to python. Then streamlining the scripts to decrease processing times by 30% on large geographical data sets with more than 40,000 entries.",
            "Devised an innovative workaround for a critical memory leak in ArcGIS geo-processor, slashing individual processing time by 50% and eliminating script crashes, resulting in a multi-week reduction in total processing time.",
            "Streamlined and optimized scripts for handling large-scale geospatial data, contributing to a more efficient and scalable data processing pipeline"
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

