import { supabase } from "@/utils/supabaseClients"
import { NextApiResponse } from "next"
import { NextResponse } from "next/server"

/*
Next.js 13 からは、NextApiRequest と NextApiResponse 型が導入されました。これらの型は、Next.js 固有の型であり、Request と Response 型を拡張しています。

NextApiRequest 型は、Request 型に加えて、以下のプロパティを追加しています。

- query: クエリパラメータ
- body: リクエストボディ
- cookies: クッキー
- headers: ヘッダー

NextApiResponse 型は、Response 型に加えて、以下のプロパティを追加しています。

- statusCode: ステータスコード
- headers: ヘッダー
- body: レスポンスボディ

req: Request, res: Response と req: NextApiRequest, res: NextApiResponse の違いは、req と res の型が異なることです。NextApiRequest 型と NextApiResponse 型は、Request 型と Response 型を拡張しているため、より多くの機能を利用することができます。
*/

export async function GET(req: Request, res: NextApiResponse) {
  const { data, error } = await supabase.from("posts").select("*")

  if (error) {
    return NextResponse.json(error)
  }

  return NextResponse.json(data, { status: 200 })
}

export async function POST(req: Request) {
  const { id, title, content } = await req.json()
  const { data, error } = await supabase
    .from("posts")
    .insert([{ id, title, content, createdAt: new Date().toISOString() }])
    .select()

  if (error) {
    return NextResponse.json(error)
  }

  return NextResponse.json(data, { status: 201 })
}
