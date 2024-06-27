import NextImage from 'next/image'
import { cn } from './utils'

const Image = ({ className, src, alt, ...rest }: { className: string, src: string, alt: string }) => {

    return (
        <div className={cn('relative', className)}>
            <NextImage
                src={src}
                alt={alt}
                fill
                {...rest}
            />
        </div>
    )
}
export default Image
