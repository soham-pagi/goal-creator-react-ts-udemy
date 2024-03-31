import './App.css';
import CourseGoalList from './components/CourseGoalList.tsx';
import react from './assets/react.svg';
import Header from './components/Header.tsx';
import { useState } from 'react';
import NewGoal from './components/NewGoal.tsx';

export type TypeCourseGoal = {
  title: string;
  description: string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<TypeCourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: TypeCourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };

      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  }

  return (
    <main className='bg-gray-700 w-[30rem] m-2 p-4 ml-auto mr-auto rounded'>
      <Header image={{ src: react, alt: 'A lists of goals' }}>
        <h1 className='text-white font-bold text-2xl'>Your Course Goals</h1>
      </Header>
      {/* <button onClick={handleAddGoal} className='bg-gray-400 px-2 py-1 my-2 rounded hover:bg-gray-300 active:bg-gray-400'>Add Goal</button> */}
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  )
}

export default App
