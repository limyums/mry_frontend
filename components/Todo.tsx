import { Todo } from "@/type/course";

const BASE_CLASS = "cohort_detailcourse_todo";

type Props = {
  todo: Todo;
};
export default function Todo({ todo }: Props) {
  return (
    <>
      {todo.isCompleted ? (
        <>
          <div id={todo.id} className={`${`${BASE_CLASS}_wrap_complete`}`}>
            <div>{todo.title}</div>
            <div>Due Date : {todo.dueDate}</div>
            <div className="complete">Complete</div>
          </div>
        </>
      ) : (
        <>
          <div id={todo.id} className={`${`${BASE_CLASS}_wrap_ongoing`}`}>
            <div>{todo.title}</div>
            <div> Due Date : {todo.dueDate}</div>
            <div className="ongoing">On Going</div>
          </div>
        </>
      )}
    </>
  );
}
