import styles from "./projects.module.scss";
import { frankRuhlLibre } from '@/app/ui/fonts';
import Image from "next/image";


const projects = [
    {
        title: "M2 Vessel Classifer",
        image: "/Capstone-1.png",
        alt_text: "UI for the M2 Vessel Classifer",
        sub_text: "WEB APP AND AI MODEL SAVING THE WORLD"
    },
    {
        title: "JakeQL",
        image: "",
        alt_text: "",
        sub_text: "DBSM WRITTEN IN PYTHON MIMICING SQLITE"
    },
    {
        title: "EvoSim",
        image: "",
        alt_text: "",
        sub_text: "BASIC EVOLUTION SIMULATOR"
    },
    {
        title: "DanceTime",
        image: "",
        alt_text: "",
        sub_text: "TO FIND WHEN YOUR FAVORITE ARTISTS ARE PLAYING NEAR YOU"
    },
    {
        title: "GeoStudy",
        image: "",
        alt_text: "",
        sub_text: "LOCATION BASED STUDY AID"
    },
    {
        title: "Off Grid Ed",
        image: "",
        alt_text: "",
        sub_text: "ANDROID APP MAKING OFFLINE DIGITAL EDUCATION POSSIBLE"
    },
    {
        title: "Portfolio",
        image: "",
        alt_text: "",
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
                        alt_text={project.alt_text}
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
    alt_text,
    sub_text

} : {
    title : string;
    image : string;
    alt_text : string;
    sub_text : string;
}
) {
    return(
        <div className={styles.project}>
            {/* <Image className={styles.image} src={image}  alt={alt_text} width={690} height={374}/> */}
            <div className={styles.title}>{title}</div>
            <div className={styles.sub_text}><div>{sub_text}</div></div>
        </div>
    )
}

