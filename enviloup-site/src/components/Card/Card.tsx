import styles from "./Card.module.scss";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  classNames?: string;
  w?: string;
  h?: string;
}

export default function Card({
  children,
  classNames,
  w = "full",
  h = "full",
}: CardProps) {
  const cardClasses = clsx(
    styles.card,
    "rounded-3xl shadow-gray-800 shadow-2xl transition-transform transform",
    `w-${w}`,
    `h-${h}`,
    classNames
  );

  return (
    <>
      <div className={cardClasses}>{children}</div>
    </>
  );
}
