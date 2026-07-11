import css from "./Footer.module.css"
import container from "@/app/container.module.css"

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={container.container}>
                <p>NoteHug</p>    
            </div>
            
        </footer>
    )
}

export default Footer