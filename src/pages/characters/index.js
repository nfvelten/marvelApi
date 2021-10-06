import api from "../api/marvel";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api
      .get("/characters")
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="header">
        
      </div>
      {/* <div>
        <h1>Personagens</h1>
      </div>
      <div>
        <ul className={styles.grid}>
          {characters.map((res) => {
            const { id, name } = res;
            console.log(id + name);
            return (
              <li className={styles.card}>
                <a>
                  <h3>Character</h3>
                </a>
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};

export default Characters;
