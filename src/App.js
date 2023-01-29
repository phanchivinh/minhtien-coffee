import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout';
import publicArchive from './assets/data/publicArchive';

const App = () => {
  return (
    <BrowserRouter>
        <div className='App'>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route 
                                key={index} 
                                path={route.path} 
                                element={
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                } 

                                />
                })}

                {publicArchive.map((route, index) => {
                    const Page = route.component;
                    return <Route
                                key={index}
                                path={route.path}
                                element={<DefaultLayout>
                                            <Page />
                                        </DefaultLayout>}
                            />
                })}
            </Routes>
        </div>
    </BrowserRouter>
  )
};

export default App;