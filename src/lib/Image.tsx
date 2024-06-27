import NextImage from 'next/image'
import { cn } from './utils'

const Image = ({ className, src, alt, priority, ...rest }: { className: string, src: string, alt: string, priority: boolean }) => {

    return (
        <div className={cn('relative', className)}>
            <NextImage
                src={src}
                alt={alt}
                priority={priority}
                fill
                {...rest}
            />
        </div>
    )
}
export default Image
