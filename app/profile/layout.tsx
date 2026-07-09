import Link from "next/link"
import css from "./profile.module.css"

interface ProfileLayoutProps {
    children: React.ReactNode
}

const ProfileLayout = ({children}: ProfileLayoutProps) => {
    return (
        <div  className={css.main_div}>
        <nav>
            <ul>
                <li>
                    <Link href="/profile/notification">Notification</Link>
                </li>
                <li>
                    <Link href="/profile/settings">Settings</Link>
                </li>
            </ul>
        </nav>  

        {children}          
        </div>)
    
}

export default ProfileLayout