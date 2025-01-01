import React from 'react'
import { setLocalStorage } from '../../utils/localStorage';

// const Header = (props) => {
//   const { firstName = "Raja" } = data;

//   const logoutUser = () => {
//   localStorage.setItem('loggedInUser','')
//   console.log(props.changeUser);
  
//   //window.location.reload()
//   }

const Header = ({ firstName = "Raja", changeUser }) => {
  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '');
    //console.log(changeUser);
    changeUser('')
  }

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {firstName} 👋
        </span>
      </h1>
      <button onClick={logoutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-md">
        Log Out
      </button>
    </div>
  );
};

export default Header;