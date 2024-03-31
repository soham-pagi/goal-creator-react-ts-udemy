import { ReactNode } from "react";

type CourseGoalProps = {
    id: number;
    title: string;
    onDelete: (id: number) => void;
    children: ReactNode;
}

function CourseGoal({ id, title, onDelete, children }: CourseGoalProps) {
    return (
        <article className="bg-gray-400 rounded p-1 flex justify-between items-center">
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => {onDelete(id)}} className="mr-1 px-1 py-2 text-gray-300 bg-red-900 rounded">Delete</button>
        </article>
    );
}

export default CourseGoal;


// function CourseGoal({ title, description }: {title: string; description: string}) {

// function CourseGoal(props: {
//     title: string;
//     description: string;
// }) {}
