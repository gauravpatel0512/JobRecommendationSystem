import { useState } from "react";
import axios from "axios";

function App() {
  const [itemId, setItemId] = useState("");
  const [num, setNum] = useState("");

  const [contentBasedRes, setContentBasedRes] = useState(undefined);
  const [collaborativeRes, setCollaborativeRes] = useState(undefined);

  const [candidate, setCandidate] = useState("");

  const getContentBased = async () => {
    const res = await axios.post(
      "http://localhost:5000",
      {
        item_id: itemId,
        num,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setContentBasedRes(res.data.res);
  };

  const getCollaborative = async () => {
    const res = await axios.post(
      "http://localhost:5000/collaborative",
      {
        candidate,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setCollaborativeRes(res.data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <label htmlFor="item_id">Item ID</label>
      <input
        id="item_id"
        type="text"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
      />
      <label htmlFor="num">Num</label>
      <input
        id="num"
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => getContentBased()}>Submit</button>
      <label htmlFor="item_id">Candidate</label>
      <input
        id="candidate"
        type="text"
        value={candidate}
        onChange={(e) => setCandidate(e.target.value)}
      />
      <button onClick={() => getCollaborative()}>Submit</button>
      <h4>Content Based</h4>
      {contentBasedRes &&
        contentBasedRes.map((cb) => {
          return <p>{cb[0]}</p>;
        })}
      <h4>Collaborative</h4>
      {collaborativeRes &&
        collaborativeRes.companies.map((c, i) => {
          return (
            <p>
              {collaborativeRes.companies[i]} ~ {collaborativeRes.titles[i]}
            </p>
          );
        })}
    </div>
  );
}

export default App;
