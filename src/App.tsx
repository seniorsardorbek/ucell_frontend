import { useEffect, useState } from "react";
import { api } from "./utils/api";

function App() {
  const [regions, setRegions] = useState<any[]>([]);
  useEffect(() => {
    api.get("/regions/sum-subscribers").then((res) => {
      setRegions(res.data);
    });
  }, []);
  return (
    <>
      {regions.map((region) => (
        <div key={region.id}>
          <h2>{region.title}</h2>
          <p>Subscribers: {region.totalSubscribers}</p>
        </div>
      ))}
    </>
  );
}

export default App;
