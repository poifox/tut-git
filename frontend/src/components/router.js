import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import HomePage from './pages';
import AboutPage from './pages/about';
import BlogIndex from './posts';
import NewPost from './posts/new';
import SinglePost from './posts/single';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <nav className="application-nav">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>
            <main id="content" className="application-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/blog" element={<BlogIndex />} /> 
                    <Route path="/blog/:postId" element={<SinglePost />}  /> 
                    <Route path="/posts/new" element={<NewPost />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}