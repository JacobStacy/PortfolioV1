import styles from "./projects.module.scss";
import { frankRuhlLibre } from '@/app/ui/fonts';
import Image from "next/image";


const projects = [
    {
        title: "M2 Vessel Classifer",
        image: "/Capstone-1.png",
        link: "http://www.capstone.cse.msu.edu/2024-01/projects/anthropocene-institute/",
        sub_text: "WEB APP AND AI MODEL SAVING THE WORLD"
    },
    {
        title: "JakeQL",
        image: "",
        link: "https://github.com/JacobStacy/JakeQL",
        sub_text: "DBSM WRITTEN IN PYTHON MIMICING SQLITE"
    },
    {
        title: "GeoStudy",
        image: "",
        link: "https://github.com/leohoerdemann/CSE_476_Project_App",
        sub_text: "LOCATION BASED STUDY AID"
    },
    {
        title: "EvoSim",
        image: "",
        link: "https://github.com/JacobStacy/EvoSim",
        sub_text: "BASIC EVOLUTION SIMULATOR"
    },
    {
        title: "[Coming Soon]",
        image: "",
        link: "",
        sub_text: "TO FIND WHEN YOUR FAVORITE ARTISTS ARE PLAYING NEAR YOU"
    },
    {
        title: "Off Grid Ed",
        image: "",
        link: "https://github.com/JacobStacy/CostaRicaEducationProjectV2",
        sub_text: "ANDROID APP FOR OFFLINE DIGITAL EDUCATION"
    },
    {
        title: "Portfolio",
        image: "",
        link: "https://github.com/JacobStacy/PortfolioV1",
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
    sub_text

} : {
    title : string;
    image : string;
    link : string;
    sub_text : string;
}
) {
    return(
        <a href={`${link}`} className={styles.project}>
            <div className={styles.sub_text}><div>{sub_text}</div></div>
            <div className={styles.title}>{title}</div>
        </a>
    )
}

