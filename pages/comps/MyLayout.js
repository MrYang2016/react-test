/**
 * Created by dell on 2018-02-06.
 */
import Header from './header'
const layoutStyle = {
    margin:20,
    padding:20,
    border:'1px solid #ddd'
};

const Layout = (props)=>(
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);
export default Layout;