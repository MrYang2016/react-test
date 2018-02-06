import Link from 'next/link'
const headerStyle = {
  marginLeft:'20px'
};
export default ()=>(
    <div className="header">
        <Link href="/">
            <a style={headerStyle}>home</a>
        </Link>
        <Link href="/test">
            <a style={headerStyle}>test</a>
        </Link>
        <Link href="/about">
            <a style={headerStyle}>about</a>
        </Link>
    </div>
)