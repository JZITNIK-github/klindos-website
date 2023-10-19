import "./app.css"
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MainBody from "./pages/main/Body"
import DownloadBody from "./pages/download/Body"
import VytvarejteAplikaceBody from "./pages/vatvarejte-aplikace/Body"
import PostsBody from "./pages/posts/Body"
import NotExist from "./pages/notexist/Body"
import ScrollToTop from "./ScrollToTop";
function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path='/' element={<MainBody/>} />
                <Route path='/download' element={<DownloadBody/>} />
                <Route path='/vytvarejte-aplikace' element={<VytvarejteAplikaceBody/>} />
                <Route path='/posts' element={<PostsBody/>} />
                <Route path='*' element={<NotExist/>} />
            </Routes>
            <Footer />
        </Router>
    )
}
export default App;