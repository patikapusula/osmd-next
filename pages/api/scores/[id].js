import { scores } from "../../../data/scoreDB";

export default function handler({ query: { id } }, res) {
  const filtered = scores.filter((score) => score.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Score with the id of ${id} is not found` });
  }
}
