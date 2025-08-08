import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const error = req.query.error;
  if (error === "true") throw new Error("This is a new error for c");
  const dp = req.query.path as string;
  const dataPath = path.join(process.cwd(), dp);
  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  res.status(200).json(data);
}
