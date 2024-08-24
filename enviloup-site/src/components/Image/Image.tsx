import styles from './Image.module.scss'
import classNames from 'classnames';

interface ImageProps {
	className?: string;
	src: string;
	alt: string;
}

export default function Image({ className, src, alt }: ImageProps) {
	return (
		<>
			<img src={src} alt={alt} className={classNames(styles.image, className)}/>
		</>
	);
}