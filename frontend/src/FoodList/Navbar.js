export default function Navbar(){
    return <nav className='navvv'>
        <a href="/" className='TitleFont'>HOME</a>
        <ul>
            <li>
                <a href='/register'>Register</a>
            </li>
            <li>
                <a href='/analytics'>Analytics</a>
            </li>
            <li>
                <a href='/donor'>Donate</a>
            </li>
        </ul>
    </nav>
}