import data from "@/data.json";
import { NextApiRequest, NextApiResponse } from "next";

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { query } = req;
  const { id } = query;
  const person = data.find((p) => p.id === id);

  if (!person) throw new Error(`Person with ${id} not found.`);

  res.status(200).json(person);
}
