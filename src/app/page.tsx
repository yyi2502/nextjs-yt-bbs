import CardList from "@/components/card/CardList";
import { BBSData } from "@/types/type";

async function getBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });
  const bbsAllData: BBSData[] = await response.json();
  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();
  return (
    <main className="grid lg:grid-cols-3 px-3 py-4 gap-4">
      <CardList bbsAllData={bbsAllData} />
    </main>
  );
}
