import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header()
{

const [toggleMenu,setToggleMenu] = useState(false);


    return(<> <header className='flex justify-between px-5 py-2 bg-primary bg-primary'>
<a className="font-bold text-black py-3" href='#'> V S NIKHIL MAHESWAR</a>
<nav className='hidden md:block'><ul className=' flex text-black'> 
   <li >  <a  href='#'> <button type='button' className='text-bold  w-[45px] py-2 rounded-full underline-hover  ' >Home</button> </a>    </li>
   <li>  <a href='#About' className=''> <button type='button' className='text-bold  w-[45px] py-2 rounded-full underline-hover' >About</button> </a>    </li>  
   <li>  <a href='#Project'><button type='button' className='   text-bold  w-[45px] py-2 rounded-full underline-hover' >Project</button></a> </li>
<li>  <a href='#resume'><button type='button' className='text-bold  w-[45px] py-2 rounded-full underline-hover' >Contact</button></a> </li>
    </ul></nav>

{ toggleMenu &&  <nav className='py-5 block md:hidden'><ul onClick={()=>setToggleMenu(!toggleMenu)} className='flex flex-col text-black  mobile-nav '> 
  <li>  <a  href='#'> <button type='button' className='' >Home</button>  </a>    </li>
   <li>  <a href='#About'>About</a>    </li>  
   <li>  <a href='#Project'>Projects</a> </li>
   <li>  <a href='#resume'>resume</a> </li>
   
  </ul></nav>}
      <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'> <Bars3Icon className='text-white h-5'/>
</button>  
    </header>   </>)
}


export default Header