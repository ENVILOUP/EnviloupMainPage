import styles from "./Card.module.scss";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  classNames?: string;
  w?: string;
  h?: string;
}

// BUG: w, h not working correctly. Use w, h in classNames
export default function Card({
  children,
  classNames,
  w = "full",
  h = "full",
}: CardProps) {
  const cardClasses = clsx(
    styles.card,
    "rounded-3xl shadow-gray-800 shadow-2xl",
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
