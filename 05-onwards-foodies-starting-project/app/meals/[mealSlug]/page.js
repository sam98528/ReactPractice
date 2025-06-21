import style from "./page.module.css";
import Image from "next/image";

function MealPage({ params }) {
  return (
    <div>
      <header className={style.header}>
        <div className={style.image}>
          <Image fill />
        </div>
        <div className={style.headerText}>
          <h1>Title</h1>
          <p className={style.creator}>
            by <a href={`mailto:${"EMAIL"}}`}>NAME</a>
          </p>
          <p className={style.summary}>Summary</p>
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default MealPage;
