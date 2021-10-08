import api from "../api/marvel";
import { useEffect, useState, useCallback } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";

const Comics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    api
      .get("/comics")
      .then((res) => {
        setComics(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  const getMore = useCallback(async () => {
    try {
      const offset = comics.length;
      const res = await api.get("comics", {
        params: { offset },
      })
      setComics([...comics, ...res.data.data.results])
    } catch (error) {
      console.log(error);
    }
  }, [comics])
  console.log(comics);
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
            <Link href="http://localhost:3000/characters">
              <Button variant="outlined" color="inherit">
                Personagens
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
          <h1>Quadrinhos</h1>
        </div>
        <div className="centered">
          <ul className="grid">
            {comics.map((res) => {
              const { id, title, thumbnail, description } = res;
              const { path } = thumbnail;
              return (
                <li key={id} className="card">
                  <img src={`${path}/portrait_fantastic.jpg`} alt="name" />
                  <h3>{title}</h3>
                  <Link href={`${path}/${id}`}>
                    <Button>Saiba mais</Button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Button onClick={getMore} variant="contained" size="large" className="centered">
          Carregue Mais
        </Button>
      </div>
    </div>
  );
};

export default Comics;
