import { scores } from "../../../data/scoreDB";
const remoteUrl = "https://opensheetmusicdisplay.github.io/demo/sheets";

export default async function handler({ query: { id } }, res) {
  const filtered = scores.filter((score) => score.id === id);

  if (filtered.length > 0) {
    console.log(filtered[0].filename);
    const response = await fetch(`${remoteUrl}/${filtered[0].filename}`);
    const file = await response.text();
    res.status(200).send(file);
  } else {
    res
      .status(404)
      .json({ message: `Score with the id of ${id} is not found` });
  }
}
