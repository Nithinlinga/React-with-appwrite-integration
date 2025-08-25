import React from 'react'
import { Container, LogoutBtn,Logo} from '../Index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  const authStatus=useSelector((state)=>state.auth.status);
  const navigate=useNavigate()
  const navItems=[
    {
      name:'Home',
      slug:'/',
      active:true
    },
    {
      name:"Login",
      slug:"/login",
      active:!authStatus
    },
    {
      name:"Signup",
      slug:"/signup",
      active:authStatus
    },
    {
      name:"All Posts",
      slug:"/all-posts",
      active:authStatus
    }
  ]
  
  return (
    <header className='py-3 shadow bg-gray-300'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
            <Logo width='60px'/>
            </Link>
          </div>
          <ul className='ml-auto flex'>
              {navItems.map((item)=>(
                item.active && <li key={item.name}>
                  <button
                  onClick={()=>{
                    navigate(item.slug)
                  }}
                  >{item.name}</button>
                </li>
              ))}
              {authStatus && (
                <li>
                  <LogoutBtn/>
                </li>
              )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header