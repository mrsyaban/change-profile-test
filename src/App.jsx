import {Routes, Route} from 'react-router-dom';

import Profile from './routes/profile/profile.component';

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Profile/>}>
        </Route>
        
    </Routes>
  );
}

export default App;
