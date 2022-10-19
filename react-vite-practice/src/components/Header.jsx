import reactLogo from '../assets/react.svg'

function Header() {
    return (
        <nav>
            <img src={reactLogo} className="nav--img"></img>
            <h3 className="nav--logo--text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

export default Header