
import React from 'react';
import { BrowserRouter,Routes as Rotas,Route } from 'react-router-dom';

import FormPage from '../Pages/FormPage';

const Routes = () => (
    <BrowserRouter>
    <Rotas>
      <Route path="/" element={<FormPage />} />
    </Rotas>
  </BrowserRouter>
);

export default Routes;
