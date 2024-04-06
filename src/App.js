import { useState, useEffect } from "react";
import RoomList from "./components/rooms/RoomList";
import classes from "./App.module.css";
import axios from "axios";

//fonction pour récupérer les données de l'API et c'est déjà bien
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRooms1, setLoadedRooms1] = useState([]);
  const [loadedRooms2, setLoadedRooms2] = useState([]);
  const [loadedRooms3, setLoadedRooms3] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get("https://batiment-243ee-default-rtdb.firebaseio.com/pieces.json")
      .then((response) => {
        const data = response.data;

        const rooms1 = [];
        const rooms2 = [];
        const rooms3 = [];

        for (const key in data) {
          const room = {
            id: key,
            ...data[key],
          };

          if (room.floor === "1") {
            rooms1.push(room);
          } else if (room.floor === "2") {
            rooms2.push(room);
          } else if (room.floor === "3") {
            rooms3.push(room);
          }
        }

        setIsLoading(false);
        setLoadedRooms1(rooms1);
        setLoadedRooms2(rooms2);
        setLoadedRooms3(rooms3);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1 className={classes.container}>Occupation des pièces du bâtiment</h1>

      <h2 className={classes.card}>Étage 1</h2>

      <RoomList rooms={loadedRooms1} />
      <h2 className={classes.card}>Étage 2</h2>
      <RoomList rooms={loadedRooms2} />
      <h2 className={classes.card}>Étage 3</h2>
      <RoomList rooms={loadedRooms3} />
    </section>
  );
}

export default App;
