import styles from "./mainNewsRoom.module.css";
import MainNewsRoomHeader from "./mainNewsRoomHeader/mainNewsRoomHeader";
import NewsRoomContainer from "./mainNewsRoomDataContainer/mainNewsRoomDataContainer";

function MainNewsRoom() {
  return (
    <div className={styles.mainNewsRoom}>
      <MainNewsRoomHeader />
      <NewsRoomContainer />
    </div>
  );
}

export default MainNewsRoom;
