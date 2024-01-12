import styles from "./MyComponent.module.css";

const MyComponent: React.FC = () => {
  return <>
  <div className={styles.someClass}>Content here</div>
  <div className={styles.someOtherClasses}>Content here</div>
  </>;
};

export default MyComponent;
