import classNames from "classnames";
import styles from './Paragraph.module.scss'

interface ParagraphProps {
	className?: string;
	children?: React.ReactNode;
	props?: unknown;
}

export default function Paragraph({ className, children, ...props }: ParagraphProps) {
	return (
    <>
      <p className={classNames(styles.paragraph, className)} {...props}>
        {children}
      </p>
    </>
  );
}