import classes from "./RoomItem.module.css";
import Card from "../user interface/Card";

function RoomItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h1 className={classes.floorLine}>Étage {props.floor}</h1>
          <p className={classes.roomLine}>Pièce {props.room}</p>
          <p className={classes.occupiedLine}>{props.isOccupied}</p>
        </div>
      </Card>
    </li>
  );
}

export default RoomItem;
