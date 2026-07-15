// app/notes/filter/layout.tsx+
//import PageContainer from "@/components/PageContainer/PageContainer"
import container from "@/app/container.module.css"

// children поточна сторінка де знаходимось

import css from "./notes.module.css"

type Props = {
    children: React.ReactNode;
    sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
    return (
        <div className={container.container}>
        <section className={css.main}>
            <aside>{sidebar}</aside>
            <div>{children}</div>
        </section>            
        </div>

    );
};

export default NotesLayout;
