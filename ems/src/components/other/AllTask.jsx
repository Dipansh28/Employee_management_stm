import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const AllTask = () => {
   const [userData,setUserData] = useContext(AuthContext);
   
  return (
    <div id="Alltask" className="bg-[#1c1c1c] p-6 mt-6 rounded-lg shadow-lg">
      {/* Header Row */}
      <div className="bg-gradient-to-r from-purple-600 via-red-500 to-pink-500 text-white py-3 px-6 flex justify-evenly items-center rounded-lg shadow-md">
        <h2 className="font-bold text-lg uppercase tracking-wide">Employee Name</h2>
        <h3 className="font-bold text-lg uppercase tracking-wide">New Task</h3>
        <h5 className="font-bold text-lg uppercase tracking-wide">Active Task</h5>
        <h5 className="font-bold text-lg uppercase tracking-wide">Completed</h5>
        <h5 className="font-bold text-lg uppercase tracking-wide">Failed</h5>
      </div>

      {/* Employee Task List */}
      <div className="h-[300px] overflow-auto mt-4">
      {userData.map((employee, index) => (         
         <div key={index}
          className="bg-gradient-to-r from-emerald-600 via-teal-500 to-green-400 text-white mb-3 py-4 px-6 flex justify-between items-center rounded-lg shadow-md hover:scale-105 transform transition-transform duration-300"
          >
            <h2 className="flex-1 font-bold text-md text-red-200 text-center truncate">{employee.firstName} </h2>
            <h3 className="flex-1 italic text-blue-200 text-center truncate">{employee.taskCounts.newTask}</h3>
            <h3 className="flex-1 italic text-blue-200 text-center truncate">{employee.taskCounts.active }</h3>
            <h5 className="flex-1 italic text-md font-semibold text-green-200 text-center">{employee.taskCounts.completed}</h5>
            <h5 className="flex-1 italic text-md font-semibold text-red-200 text-center">{employee.taskCounts.failed}</h5>
          </div>
       ))}
      </div>
    </div>
  );
};

export default AllTask;
