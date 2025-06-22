import styles from "./NewsRoomTempleteC.module.css";

function NewsRoomTempleteC({
  newsRoomData,
}: {
  newsRoomData: [string, string][];
}) {
  return (
    <div className={styles.newsRoomContainer}>
      <NewsRoomDataContent newsRoomData={newsRoomData} />
    </div>
  );
}

function NewsRoomDataContent({
  newsRoomData,
}: {
  newsRoomData: [string, string][];
}) {
  return (
    <div className={styles.newsRoomContentContainer}>
      {newsRoomData.map((data, index) => (
        <div key={index} className={styles.contentWithImageData}>
          <div className={styles.contentImageContainer}>
            <img src={data[0]} alt="" />
          </div>
          <p className={styles.contentTitle}>{data[1]}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsRoomTempleteC;
