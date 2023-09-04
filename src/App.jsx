import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from './components/MainContent';

const App = () => {
    const img = 'https://picsum.photos/200/200';
    const img2 = 'https://picsum.photos/200/200';
    const title = 'Đây là bài viết 1';
    const title2 = 'Đây là bài viết 2';
    const paragraph = 'đây là mô tả bài viết 1';
    const paragraph2 = 'đây là mô tả bài viết 2';
    return <div>
        <Header/>
        <MainContent img={ img } title={ title } paragraph={ paragraph }/>
        <MainContent img={ img2 } title={ title2 } paragraph={ paragraph2 }/>
        <Footer/>
    </div>
}


export default App;
