import { BBSData } from "@/types/type";
import React from "react";

async function getDetailBBSData(id: number) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });
  const bbsDetailData: BBSData = await response.json();
  return bbsDetailData;
}

const BBSDetailPage = async ({ params }: { params: { bbsId: number } }) => {
  const bbsDetailData = await getDetailBBSData(params.bbsId);
  console.log(bbsDetailData);
  return <>BBSDetailPage</>;
};
export default BBSDetailPage;
