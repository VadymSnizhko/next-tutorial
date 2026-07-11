import Link from "next/link"
import css from "./Header.module.css"
import container from "@/app/container.module.css"

const Header = () => {
    return (
        <header >
            <div className={`${container.container} ${css.headertitle}`}>
                <Link className={container.h2title} href="/">NoteHub</Link>
                <nav>
                    <ul className={css.ulnavigator}>
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
            </div>



        </header>
    )
}

export default Header