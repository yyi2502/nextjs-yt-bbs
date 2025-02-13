import { BBSData } from "@/types/type";
import CardItem from "./CardItem";

type BBSAllDataProps = {
  bbsAllData: BBSData[];
};
const CardList = ({ bbsAllData }: BBSAllDataProps) => {
  return (
    <>
      {bbsAllData.map((bbsData: BBSData) => (
        <CardItem key={bbsData.id} bbsData={bbsData} />
      ))}
    </>
  );
};
export default CardList;
