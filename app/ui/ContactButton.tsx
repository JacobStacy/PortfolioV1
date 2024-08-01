import styles from "./contactButton.module.scss"
import Link from "next/link";


export function ContactButton(
    {
        href,
        children
    } : 
    {
        href : string;
        children? : React.ReactNode;
    }
){
    return(
        <Link href={href} className={styles.link}>
            <div className={styles.contact_button}>
                <span data-text={children}>{children}</span>
            </div>
        </Link>
    )

}

