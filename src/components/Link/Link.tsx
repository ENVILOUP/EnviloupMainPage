import classNames from "classnames";
import styles from './Link.module.scss'
import { FaExternalLinkAlt } from "react-icons/fa";

interface ParagraphProps {
	className?: string;
	children: string;
	href: string;
	showAnchorIcon?: boolean;
}

export default function Link({ className, children, href, showAnchorIcon }: ParagraphProps) {
	return (
		<span className={classNames(styles.link, className)}>
      <a href={href}>
				{children}
				{showAnchorIcon && <><FaExternalLinkAlt size="0.85rem" className="inline ml-1 mb-3" /></>}
			</a>
    </span>
  );
}