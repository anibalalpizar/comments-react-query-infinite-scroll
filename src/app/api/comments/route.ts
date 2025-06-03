import { NextRequest, NextResponse } from "next/server"

import { myOrm } from "@/lib/db"
import { Comment } from "./data"

export type GetCommentsResponse = {
  comments: Comment[]
  nextCursor?: number
}

export type CreateCommentResponse = {
  comment: Comment
}

export async function GET(request: NextRequest) {
  const cursorParam = request.nextUrl.searchParams.get("cursor")
  const cursor = cursorParam ? parseInt(cursorParam) : undefined

  const pageSize = 10

  const delay = Math.floor(Math.random() * 700) + 300
  await new Promise((resolve) => setTimeout(resolve, delay))

  //     return NextResponse.json(
  //       { error: "Failed to fetch comments" },
  //       { status: 500 }
  //     );

  const comments = await myOrm.findComments({
    take: pageSize + 1,
    cursor: cursor ? { id: cursor } : undefined,
    sort: "desc",
  })

  const nextCursor =
    comments.length > pageSize ? comments[pageSize].id : undefined

  const response: GetCommentsResponse = {
    comments: comments.slice(0, pageSize),
    nextCursor,
  }

  return NextResponse.json(response)
}
