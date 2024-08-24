import styles from "./Card.module.scss";
import classNames from "classnames";

interface CardProps {
  children: React.ReactNode;
	className?: string;
	props?: unknown;
}

export default function Card({
  children,
	className,
	...props
}: CardProps) {

  return (
    <>
      <div className={classNames(styles.card, className)} {...props}>
        {children}
      </div>
    </>
  );
}
