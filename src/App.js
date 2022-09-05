import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '@/routes';
import { DefaultLayout } from '@/components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import Login from './pages/Auth/Login';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';

function App() {
    const { auth, alert } = useSelector((state) => state);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {!localStorage.getItem('token')
                        ? publicRoutes.map((route, index) => {
                              let Layout = DefaultLayout;
                              if (route.layout) {
                                  Layout = route.layout;
                              } else if (route.layout === null) {
                                  Layout = Fragment;
                              }

                              const Page = route.component;
                              return (
                                  <Route
                                      key={index}
                                      path={route.path}
                                      element={
                                          <Layout>
                                              <Page></Page>
                                          </Layout>
                                      }
                                  ></Route>
                              );
                          })
                        : privateRoutes.map((route, index) => {
                              let Layout = DefaultLayout;
                              if (route.layout) {
                                  Layout = route.layout;
                              } else if (route.layout === null) {
                                  Layout = Fragment;
                              }

                              const Page = route.component;
                              return (
                                  <Route
                                      key={index}
                                      path={route.path}
                                      element={
                                          <Layout>
                                              <Page></Page>
                                          </Layout>
                                      }
                                  ></Route>
                              );
                          })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
