/* 
* This is a Header component
*/

const Header = ({ text, className }) => {
    return (
        <h2 className={className}>{text}</h2>
    )
}
export default Header;