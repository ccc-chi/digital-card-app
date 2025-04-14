import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Cards } from '../components/pages/Cards';
import { User } from '../components/pages/User';
import { Register } from "../components/pages/Register";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/cards/:id" element={<User />} />
      <Route path="/cards/register" element={<Register />} />
    </Routes>
  );

})