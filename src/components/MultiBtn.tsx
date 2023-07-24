import { ContentPair } from "src/types/base";
import styles from "./MultiBtn.module.css";
import { useState } from "react";

export type MultiBtnContentPair = ContentPair<string>;

interface IMultiBtnProps {
  contents: MultiBtnContentPair[];
}

export default function MultiBtn({ contents }: IMultiBtnProps) {
  const buttonNames = contents.map((content) => content.data);
  const contentTexts = contents.map((content) => content.content);

  const [contentState, setContentState] = useState(0);
  return (
    <div className={styles.faqBox}>
      <div className={styles.faqBtnBox}>
        {buttonNames.map((text, index) => (
          <button
            className={styles.classBtns}
            onClick={() => setContentState(index)}
          >
            {text}
          </button>
        ))}
      </div>
      <div className={styles.faqContent}>
        <p>{contentTexts[contentState]}</p>
      </div>
    </div>
  );
}
