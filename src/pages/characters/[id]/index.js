import { useState, useEffect } from "react";
import api from "../../api/marvel";
import { useRouter } from "next/dist/client/router";

const Details = () => {
  const [details, setDetails] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const { thumbnail } = details;
  useEffect(() => {
    api
      .get(`/characters/${id}`)
      .then((res) => {
        setDetails(res.data.data.results[0]);
      })
      .catch((err) => console.log(err));
  }, [details]);
  console.log(details);
  return (
    <div className="Card">
      <div>
        <div>
          <img
            src={`${details.thumbnail.path}/portrait_fantastic.jpg`}
            alt="name"
          />
          <h3>{details.name}</h3>
          <p>{details.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Details;
