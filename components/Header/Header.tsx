import Link from "next/link"
import css from "./Header.module.css"

const Header = () => {
    return (
        <header className = {css.headertitle}>
            <Link href="/">NoteHub</Link>
            <nav>
            <ul className= {css.ulnavigator}>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/notes">Notes</Link>
                </li>
                <li>
                    <Link href="/profile">Profile</Link>
                </li>
                <li>
                    <Link href="/control-panel">Control Panel</Link>
                </li>
            </ul>                
            </nav>


        </header>
    )
}

export default Header