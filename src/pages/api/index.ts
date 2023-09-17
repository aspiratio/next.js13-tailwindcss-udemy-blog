/* 
App Routerを使わない書き方（Route Handlers）

import { supabase } from "@/utils/supabaseClients"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase.from("posts").select("*")

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  return res.status(200).json(data)
}
 */
