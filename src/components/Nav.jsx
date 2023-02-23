import React from 'react' ;
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const NavStyles = ({isActive}) => {
    return {borderBottom: isActive?"2.5px solid red":""}
  }
  return (
    <nav className='flex flex-col justify-start items-start ml-32 mr-32 p-5 border-b-2 border-slate-400 h-24'>
        <h1 className='text-xl text-slate-800 font-semibold mb-2'>Create Flashcard</h1>
        <div className='flex flex-row justify-start mt-2 ml-1'>
 <NavLink className="mr-5 mt-1.5" style ={NavStyles} to="/createnew">Create New</NavLink>
 <NavLink className="mr-5 mt-1.5" style ={NavStyles} to="/myflashcard">My Flashcard</NavLink>
 </div>
    </nav>
  )
}

export default Nav 