import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:id" element={<MovieDetails />}></Route>
        <Route path="*" element={'Sorry, there is no adress like this.'} />
      </Route>
    </Routes>
  );
};

export default App;