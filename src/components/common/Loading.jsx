import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center min-h-screen w-full">
      <div className={styles.loadingContainer}>
        <div className={styles.loadingOuterAnimation}></div>
        <div className={styles.loadingInnerAnimation}></div>
      </div>
    </div>
  );
};

export default Loading;
