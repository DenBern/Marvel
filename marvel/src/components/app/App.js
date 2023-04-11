import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';
import { MainPage, ComicsPage, SingleComicPage, Page404 } from '../pages';
import SingleComicLayout from '../pages/singleComicLayout/SingleComicLayout';
import SingleCharacterLayout from '../pages/singleCharacterLayout/SingleCharacterLayout';
import SinglePage from '../pages/SinglePage';

// Doesn't not work - 176
// const Page404 = lazy(() => import('../pages/404'));
// const MainPage = lazy(() => import('../pages/MainPage'));
// const ComicsPage = lazy(() => import('../pages/ComicsPage'));
// const SingleComicPage = lazy(() => import('../pages/404'));

// import { MainPage, SingleComicPage, ComicsPage, Page404 } from '../pages';

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/comics" element={<ComicsPage/>}/>
                            <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic' />} />
                            <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character' />} />
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App; 