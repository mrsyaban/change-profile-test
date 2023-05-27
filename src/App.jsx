import {Routes, Route} from 'react-router-dom';

import Profile from './routes/profile/profile.component';
import Title from './components/title/title.component';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Title/>}>
          <Route path='profile' element={<Profile/>}/>
        </Route>
    </Routes>
  );
}

export default App;
