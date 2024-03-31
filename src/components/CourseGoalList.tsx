import CourseGoal from "./CourseGoal.tsx";
import { type TypeCourseGoal } from "../App.tsx";
import Infobox from "./Infobox.tsx";
import { type ReactNode } from "react";

type CourseGoalListProps = {
    goals: TypeCourseGoal[];
    onDeleteGoal: (id: number) => void;

}

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
    if (goals.length == 0) {
        return (
            <Infobox mode="hint">
                You have no course goals yet. Start adding some!
            </Infobox>
        );
    }

    let warningBox: ReactNode;

    if (goals.length >= 4) {
        warningBox = <Infobox mode="warning">
            You're colleting a lot of goals. Don't put too much on your plate!
        </Infobox>
    }

    return (
        <>
        {warningBox}
        <ul className="grid grid-cols-2 gap-1">
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                        <p>{goal.description}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
        </>
    );
}

export default CourseGoalList;