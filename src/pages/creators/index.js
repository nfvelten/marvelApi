import api from "../api/marvel";
import { useEffect, useState, useCallback } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";

const Creators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(async () => {
    await api
      .get("/creators")
      .then((res) => {
        setCreators(res.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  const getMore = useCallback(async () => {
    try {
      const offset = creators.length;
      const res = await api.get("creators", {
        params: { offset },
      })
      setCreators([...creators, ...res.data.data.results])
    } catch (error) {
      console.log(error);
    }
  }, [creators])
  console.log(creators);
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
            <Link href="http://localhost:3000/characters">
              <Button variant="outlined" color="inherit">
                Personagens
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <div>
        <div className="centered">
          <h1>Autores</h1>
        </div>
        <div className="centered">
          <ul className="grid">
            {creators.map((res) => {
              const { id, firstName, thumbnail } = res;
              const { path } = thumbnail;
              return (
                <li key={id} className="card">
                  <img src={`${path}/portrait_fantastic.jpg`} alt="name" />
                  <h3>{firstName}</h3>
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

export default Creators;
