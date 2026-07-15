import css from './PageContainer.module.css'
import container from '@/app/container.module.css'

type PageContainerProps = {
    title: string
    description?: string
    category?: string
    children?: React.ReactNode
}

const PageContainer = ({title, description, category, children}:PageContainerProps) => {
    return (
        <div className={container.container}>
            <div>
                <h1 className={css.title}>
                    {title}
                </h1>
                {description && (
                    <p>{description}</p>
                )}

                {category && (
                    <strong>Category: {category}</strong>
                )}

                {children && (
                    <p>{children}</p>
                )}
            </div>
        </div>
    )
}

export default PageContainer