import { kv } from "@vercel/kv";

export default async function setHandler(request, response) {
  const user = await kv.get("time");
  return response.status(200).json(user);
}
