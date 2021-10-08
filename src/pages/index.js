import Link from "next/link";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div>
      <div className="center">
        <h1>Conheça seus herois favoritos</h1>
        <Link href="/characters">
          <Button variant="contained">Personagens</Button>
        </Link>
        <div className="divider" />
        <Link href="/comics">
          <Button variant="contained">Comics</Button>
        </Link>
        <div className="divider" />
        <Link href="/creators">
          <Button variant="contained">Autores</Button>
        </Link>
      </div>
    </div>
  );
}
