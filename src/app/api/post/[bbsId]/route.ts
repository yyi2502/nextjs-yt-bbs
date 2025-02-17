import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prismaClient";

export async function GET(
  // req: Request,
  { params }: { params: { bbsId: string } }
) {
  const { bbsId } = params;
  console.log(bbsId);
  try {
    const bbsDetailData = await prisma.post.findUnique({
      where: {
        id: parseInt(bbsId),
      },
    });

    if (!bbsDetailData) {
      // 投稿が見つからない場合
      return new NextResponse("Post not found", { status: 404 });
    }
    return NextResponse.json(bbsDetailData);
  } catch (error) {
    console.error("Error fetching post:", error); // エラーログ
    return new NextResponse("Internal server error", { status: 500 }); // サーバーエラー
  }
}

// import { NextResponse } from "next/server";
// import { prisma } from "../../../../lib/prismaClient";

// export async function GET(
//   req: Request,
//   { params }: { params: Promise<{ bbsId: string }> }
// ) {
//   const { bbsId } = await params;
//   const bbsDetailData = await prisma.post.findUnique({
//     where: {
//       id: parseInt(bbsId),
//     },
//   });
//   return NextResponse.json(bbsDetailData);
// }
