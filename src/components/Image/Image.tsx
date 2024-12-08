import styles from './Image.module.scss'
import classNames from 'classnames';

import Image from 'next/image';

interface ImageProps {
	className?: string;
	src: string;
	alt: string;
}

export default function MImage({ className, src, alt }: ImageProps) {
	return (
		<>
			<img src={src} alt={alt} className={classNames(styles.image, className)}/>
		</>
	);
}