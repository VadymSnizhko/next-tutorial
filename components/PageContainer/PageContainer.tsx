import css from './PageContainer.module.css'
type PageContainerProps = {
    title: string
    description?: string
    children?: React.ReactNode
}

const PageContainer = ({title, description, children}:PageContainerProps) => {
    return (
        <div className={css.page}>
            <div>
                <h1>
                    {title}
                </h1>
                {description && (
                    <p>{description}</p>
                )}

                {children && (
                    <p>{children}</p>
                )}
            </div>
        </div>
    )
}

export default PageContainer