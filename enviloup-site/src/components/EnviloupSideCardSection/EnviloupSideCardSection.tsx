import styles from './EnviloupSideCardSection.module.scss'

export default function EnviloupSideCardSection({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className={styles.EnviloupSideCardSection}>   
                {children}
            </div>
        </>
    );
}