import { scores } from "../../../data/scoreDB";

export default function handler(req, res) {
  res.status(200).json(scores);
}
