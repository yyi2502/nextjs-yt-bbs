import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BBSData } from "@/types/type";
import Link from "next/link";

type BBSDataProps = {
  bbsData: BBSData;
};

const CardItem = ({ bbsData }: BBSDataProps) => {
  const { id, title, content, username, createdAt } = bbsData;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/bbs-posts/${id}`} className="text-blue-500">
          Read more...
        </Link>
      </CardFooter>
    </Card>
  );
};
export default CardItem;
