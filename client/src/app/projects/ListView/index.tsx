import Header from "@/app/components/Header";
import TaskCard from "@/app/components/TaskCard";
import { Task, useGetTaskQuery, Task as TaskType } from "@/state/api";
import React from "react";

type Props = {
  id: string;
  setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const ListView = ({ id, setIsModalNewTaskOpen }: Props) => {
  const {
    data: tasks,
    error,
    isLoading,
  } = useGetTaskQuery({ projectId: Number(id) });

  if (isLoading) return <div>Loading... Please Wait</div>;
  if (error) return <div>An error occured while fetching Tasks</div>;

  return (
    <div className={`px-4 xl:px-6`}>
      <div className="pt-5">
        <Header name="List" />
      </div>
      <div
        className={`grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6`}
      >
        {tasks?.map((task: Task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default ListView;
