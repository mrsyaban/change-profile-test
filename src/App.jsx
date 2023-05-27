import {Routes, Route} from 'react-router-dom';

import Profile from './routes/profile/profile.component';
import Title from './components/title/title.component';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Profile/>}/>
    </Routes>
  );
}

export default App;
