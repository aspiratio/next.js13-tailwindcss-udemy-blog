import { supabase } from "@/utils/supabaseClients"
import { notFound } from "next/navigation"
import { NextResponse } from "next/server"

export async function GET(req: Request, context: { params: { id: string } }) {
  const { id } = context.params

  /*
	Udemyの講座では下記の方法でIDを取得している
	
	const id = req.url.split("/blog/")[1]
  console.log(req.url)
  console.log(id)
	*/

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    return NextResponse.json(error)
  }

  if (!data) {
    notFound()
  }

  return NextResponse.json(data, { status: 200 })
}
