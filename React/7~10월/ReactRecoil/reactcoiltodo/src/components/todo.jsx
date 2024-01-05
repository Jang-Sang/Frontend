import TodoApi from "../apis/todo";
import { useQuery } from "@tanstack/react-query";

const Todo = () => {
  const { data } = useQuery(["getTodo"], () => TodoApi);
};
