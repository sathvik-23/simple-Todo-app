// import { ITask } from '@/public/types/tasks'
// import React from 'react'
// import Task from './Task'

// interface TodoListProps {
//   tasks: ITask[]
// }

// const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="table w-full">
//         {/* head */}
//         <thead>
//           <tr>
//             <th>Tasks</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tasks.map((task) => (
//             <Task key={task.id} task={task} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default TodoList
import React from 'react' // Added import statement
import { ITask } from '@/public/types/tasks'
import Task from './Task'

interface TodoListProps {
  tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList
