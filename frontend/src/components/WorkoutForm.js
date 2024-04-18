import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workout", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("new workout added", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Exercise Title: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Load (in kg): </label>
        <input
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />
        <label>Reps: </label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />

        <button>Add Workout</button>
      </form>
    </>
  );
};

export default WorkoutForm;
