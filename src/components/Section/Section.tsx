import classNames from "classnames";
import styles from './Section.module.scss'

interface SectionProps {
	className?: string;
	children?: React.ReactNode;
	props?: unknown;
}

export default function Section({ className, children, ...props }: SectionProps) {
	return (
    <>
      <div className={classNames(styles.section, className)} {...props}>
        {children}
      </div>
    </>
  );
}