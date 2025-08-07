import { data } from "@/data";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const error = req.query.error;
  if (error === "true") throw new Error("This is a new error for c");
  res.status(200).json(data);
}
