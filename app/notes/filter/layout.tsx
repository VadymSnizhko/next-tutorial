// app/notes/filter/layout.tsx+
//import PageContainer from "@/components/PageContainer/PageContainer"
import css from "./notes.module.css"

type Props = {
    children: React.ReactNode;
    sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
    return (
        <section className={css.main}>
            <aside>{sidebar}</aside>
            <div>{children}</div>
        </section>
    );
};

export default NotesLayout;
