import Link from "next/link";
import { api } from "./api";

type TodosProps = {
  userId: number;
  title: string;
  id: number;
};

export default function Home() {
  const getPosts = async () => {
    const response = await api.get<TodosProps[]>("/");
    return response.data;
  };

  return (
    <div className="main">
      <h2>Home page</h2>

      <Link rel="stylesheet" href="/about">
        About
      </Link>
    </div>
  );
}
