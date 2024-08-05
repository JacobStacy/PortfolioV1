import styles from "./projects.module.scss";
import { frankRuhlLibre } from '@/app/ui/fonts';
import Image from "next/image";


const projects = [
    {
        title: "M2 Vessel Classifer",
        image: "/Capstone-1.png",
        link: "http://www.capstone.cse.msu.edu/2024-01/projects/anthropocene-institute/",
        availiable: true,
        sub_text: "WEB APP AND AI MODEL SAVING THE WORLD"
    },
    {
        title: "JakeQL",
        image: "",
        link: "https://github.com/JacobStacy/JakeQL",
        availiable: true,
        sub_text: "DBSM WRITTEN IN PYTHON MIMICING SQLITE"
    },
    {
        title: "GeoStudy",
        image: "",
        link: "https://github.com/leohoerdemann/CSE_476_Project_App",
        availiable: true,
        sub_text: "LOCATION BASED STUDY AID"
    },
    {
        title: "EvoSim",
        image: "",
        link: "https://github.com/JacobStacy/EvoSim",
        availiable: true,
        sub_text: "BASIC EVOLUTION SIMULATOR"
    },
    {
        title: "[Coming Soon]",
        image: "",
        link: "",
        availiable: false,
        sub_text: "TO FIND WHEN YOUR FAVORITE ARTISTS ARE PLAYING NEAR YOU"
    },
    {
        title: "Off Grid Ed",
        image: "",
        link: "https://github.com/JacobStacy/CostaRicaEducationProjectV2",
        availiable: true,
        sub_text: "ANDROID APP FOR OFFLINE DIGITAL EDUCATION"
    },
    {
        title: "Portfolio",
        image: "",
        link: "https://github.com/JacobStacy/PortfolioV1",
        availiable: true,
        sub_text: "THE VERY SITE YOU ARE ON NOW"
    }
];


export function Projects () {
    return(

        <>
            <div className={`${styles.header} ${frankRuhlLibre.className}`}>Projects</div>
            <div className={`${styles.project_container}`}>
                {projects.map((project) => {
                    return(
                        <Project 
                        title={project.title}
                        image={project.image}
                        link={project.link}
                        availiable={project.availiable}
                        sub_text={project.sub_text}/>
                    )
                })}
            </div>
        </>
    )
}


export function Project ({
    title,
    image,
    link,
    availiable,
    sub_text

} : {
    title : string;
    image : string;
    link : string;
    availiable : boolean;
    sub_text : string;
}
) {

    // Apply class when project not yet availiable
    let availiable_class = ""
    if (!availiable) {
        availiable_class = styles.unavailable;

        
    }


    return(
        <a href={`${link}`} className={`${styles.project} ${availiable_class}`}>
            <div  aria-hidden="true" className={styles.tv_static}></div>

            <div className={styles.sub_text}>{sub_text}</div>
            <div className={styles.title}>
                {!availiable && (
                    <span aria-hidden="true" className={styles.glitch_mask}>{title}</span>
                )}
                {title}
                {!availiable && (
                    <span  aria-hidden="true" className={styles.glitch_mask}>{title}</span>
                )}
            </div>            
        </a>
    )
}

