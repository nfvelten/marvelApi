import api from "../api/marvel";
import { useEffect, useState, useCallback } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api
      .get("/characters")
      .then((res) => {
        setCharacters(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  const getMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const res = await api.get("characters", {
        params: { offset },
      });
      setCharacters([...characters, ...res.data.data.results]);
    } catch (error) {
      console.log(error);
    }
  }, [characters]);
  console.log(characters);
  return (
    <div>
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="http://localhost:3000/comics">
              <Button variant="outlined" color="inherit">
                Quadrinhos
              </Button>
            </Link>
            <Link href="http://localhost:3000/creators">
              <Button variant="outlined" color="inherit">
                Autores
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <div className="centered">
          <h1>Personagens</h1>
        </div>
        <div className="centered">
          <ul className="grid">
            {characters.map((res) => {
              const { id, name, thumbnail } = res;
              const { path } = thumbnail;
              return (
                <li key={id} className="card">
                  <img src={`${path}/portrait_fantastic.jpg`} alt="name" />
                  <h3>{name}</h3>
                  <Link href={`/characters/${res.id}`}>
                    <Button>Saiba mais</Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Button
          onClick={getMore}
          variant="contained"
          size="large"
          className="centered"
        >
          Carregue Mais
        </Button>
      </div>
    </div>
  );
};

export default Characters;
