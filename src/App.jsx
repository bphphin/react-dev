import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Product from "./components/Product";
import DemoState from "./components/DemoState";
import Form from "./components/Form";

const App = () => {
    return <div>
        <Header/>
        {/* <Product img='https://picsum.photos/200/200' title="Sản phẩm 1" desc="Mô tả sản phẩm 1" discount={ true } />
        <Product img='https://picsum.photos/200/200' title="Sản phẩm 2" desc="Mô tả sản phẩm 2" discount={ true } />
        <Product img='https://picsum.photos/200/200' title="Sản phẩm 3" desc="Mô tả sản phẩm 3" discount={ false } /> */}
        {/* <DemoState/> */}

        {/* Form */}

        <Form/>
        <Footer/>
    </div>
}


export default App;
