import RoomItem from "./RoomItem";
import classes from "./RoomList.module.css";

function RoomList(props) {
  return (
    <ul className={classes.list}>
      {props.rooms.map((room) => (
        <RoomItem
          key={room.id}
          id={room.id}
          floor={room.floor}
          room={room.room}
          isOccupied={room.isOccupied}
        />
      ))}
    </ul>
  );
}

export default RoomList;
