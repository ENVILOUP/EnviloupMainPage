import styles from './Header.module.scss'
import classNames from 'classnames';

interface HeaderProps {
	className?: string;
	children?: React.ReactNode;
	props?: unknown;
}

export default function Header({ className, children, ...props }: HeaderProps) {
	return (
    <>
      <h1 className={classNames(styles.header, className)} {...props}>
        {children}
      </h1>
    </>
  );
}