import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Counter } from './pages/exercise_1/Counter';
import UsersComponent from './pages/exercise_2/UsersComponent';
import { UserList } from './pages/exercise_3/UserList';
import { Protected } from './pages/protected/Protected';
import { Home } from './pages/home/Home';
import { Users } from './pages/users/list/Users';
import { UserDetails } from './pages/users/details/UserDetails';
import { PostsList } from './pages/posts/list/PostsList';
import { RegisterPost } from './pages/posts/register/RegisterPost';
import { EditPost } from './pages/posts/edit/EditPost';
import { Login } from './pages/auth/login/Login';
import { AuthProtected } from './pages/protected-auth/ProtectedAuth';
function App() {

  return (
    <div className='min-h-screen'>
      <Router>
        <Routes>
          <Route element={<AuthProtected />}>
            <Route path='/auth/login' element={<Login />} />
          </Route>
          <Route element={<Protected />}>
            <Route path='/' element={<Home />} />
            <Route path='/exercise_1' element={<Counter />} />
            <Route path='/exercise_2/:id' element={<UsersComponent />} />
            <Route path='/exercise_3' element={<UserList />} />
            <Route path='/users/list' element={<Users />} />
            <Route path='/users/details/:id' element={<UserDetails />} />
            <Route path='/posts/list/:id' element={<PostsList />} />
            <Route path='/posts/register' element={<RegisterPost />} />
            <Route path='/posts/edit/:id' element={<EditPost />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
