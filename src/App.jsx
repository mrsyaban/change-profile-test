import {Routes, Route} from 'react-router-dom';

import Profile from './routes/profile/profile.component';
import Title from './components/title/title.component';
import EditProfile from './routes/edit-profile/edit-profile.component';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Profile/>}/>
        <Route path='/edit-profile' element={<EditProfile/>}/>
    </Routes>
  );
}

export default App;
