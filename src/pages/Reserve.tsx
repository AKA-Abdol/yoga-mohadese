import styles from "./styles/Reserve.module.css";
import Header from "../components/Header";
import { SetStateAction, useState } from "react";

export default function Reserve() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxlsmny036LQVKVs_tW6NyRsygUWLTt3CnGbZeV9sixbSR3IXB8N6gTfHs6TEByjoXE/exec";

  const phoneno = /^\d{9,12}$/;

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [mail, setMail] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNumber(e.target.value);

  const handleMailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMail(e.target.value);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name.length < 3 || name == "") {
      setErrMsg("نام خود را به صورت کامل وارد نمایید");
    } else if (!number.match(phoneno)) {
      setErrMsg("شماره تلفن همراه خود را با اعداد انگیلیسی و کامل وارد نمایید");
    } else {
      setErrMsg("لطفا چند صبر کنید.");

      const formData = new FormData();
      formData.append("name", name);
      formData.append("number", number);
      formData.append("mail", mail);

      fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
          console.log("annas agha send shod");

          setErrMsg("اطلاعات شما ثبت شد. در اولین فرصت به شما پیام میدهیم.");
          setTimeout(function () {
            setErrMsg("");
          }, 5000);
          setMail("");
          setName("");
          setNumber("");
        })
        .catch((error) => console.error("Error!", error.message));
    }
  };

  return (
    <div className={styles.bodyStyle}>
      <Header />
      <div className={styles.mainContent}>
        <h1 className={styles.h1Styles}>فرم تماس</h1>
        <h2 className={styles.h2Styles}>
          جهت رزرو برای کلاس های حضوری و کسب اطلاعات بیشتر می‌توانید فرم زیر را
          برای ما ارسال کنید تا در واتس‌اپ به شما پیام دهیم.
        </h2>
        <form className={styles.myForm} action="">
          <label htmlFor="name">
            نام <span className={styles.makeItred}>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="number">
            شماره تماس <span className={styles.makeItred}>*</span>
          </label>
          <input
            type="text"
            name="number"
            value={number}
            onChange={handleNumberChange}
          />
          <label htmlFor="mail">ایمیل</label>
          <input
            type="text"
            name="mail"
            value={mail}
            onChange={handleMailChange}
          />
          <p className={styles.errMsgStyle}>{errMsg}</p>
          <button type="submit" onClick={handleSubmit}>
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
}
