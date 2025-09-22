import { Home } from "./pages/Home"
import {Header} from "./components/header";
import {
    Outlet,
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';
import {MyPage} from "./pages/MyPage.tsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path={'mp'} element={<MyPage />}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App

function Layout() {
    return (
        <>
            <Header />
            <main className='mt-[60px] flex flex-col gap-4'>
                <Outlet />
            </main>
        </>
    );
}