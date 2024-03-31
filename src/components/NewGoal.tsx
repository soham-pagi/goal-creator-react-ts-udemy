import { useRef, type FormEvent } from "react";

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void;
};

function NewGoal({ onAddGoal }: NewGoalProps) {
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // const formData = new FormData(event.currentTarget);
        // console.log(formData);

        const enteredGoal = goal.current!.value;
        const enteredSummary = summary.current!.value;

        if (enteredGoal !== '') {
            onAddGoal(enteredGoal, enteredSummary);
            event.currentTarget.reset();
        } else {
            alert('Enter valid goal!');
        }

    }

    return (
        <form className="space-y-3 my-3 text-white" onSubmit={handleSubmit}>
            <p className="flex flex-col">
                <label className="text-white text-sm" htmlFor="goal">YOUR GOAL</label>
                <input ref={goal} name="goal" className="bg-gray-500 rounded p-1 outline-none focus:outline-green-600" id="goal" type="text" autoComplete="off" />
            </p>
            <p className="flex flex-col">
                <label className="text-white text-sm" htmlFor="summary">SHORT SUMMARY</label>
                <input ref={summary} className="bg-gray-500 p-1 rounded outline-none focus:outline-green-600" id="summary" type="text" autoComplete="off" />
            </p>
            <p>
                <button type="submit" className="bg-green-700 w-full px-2 py-1 rounded text-white">Add Goal</button>
            </p>
        </form>
    );
}

export default NewGoal;
