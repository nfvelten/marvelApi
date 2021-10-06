import api from "../api/marvel";
import { useEffect } from "react";

function Comics() {
  useEffect(() => {
    api
      .get("/comics")
      .then((response) => console.log(response.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* <div className="header">
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
}

export default Comics;
