import React from "react";
import { BBSData } from "@/types/type";
import Link from "next/link";

async function getDetailBBSData(id: number) {
  try {
    const response = await fetch(`http://localhost:3000/api/post/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      // httpエラーチェックを追加
      throw new Error(`エラーチェック：HTTP error! status: ${response.status}`);
    }

    const bbsDetailData: BBSData = await response.json();
    return bbsDetailData;
  } catch (error) {
    // fetchingエラーチェックを追加
    console.error("エラーチェック：Error fetching BBS detail:", error);
    throw error;
  }
}

const BBSDetailPage = async ({
  params,
}: {
  params: Promise<{ bbsId: number }>;
}) => {
  const { bbsId } = await params;
  const bbsDetailData = await getDetailBBSData(bbsId);
  const { title, username, content } = bbsDetailData;

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-700">{username}</p>
      </div>
      <div className="mb-8">
        <p className="text-gray-900">{content}</p>
      </div>
      <Link
        href={"/"}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
      >
        戻る
      </Link>
    </div>
  );
};
export default BBSDetailPage;
