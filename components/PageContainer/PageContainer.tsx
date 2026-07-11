import css from './PageContainer.module.css'
import container from '@/app/container.module.css'

type PageContainerProps = {
    title: string
    description?: string
    children?: React.ReactNode
}

const PageContainer = ({title, description, children}:PageContainerProps) => {
    return (
        <div className={container.container}>
            <div>
                <h1 className={css.title}>
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