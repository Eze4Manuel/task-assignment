/* 
* This is a Button component
*/

const Button = ({ text, className, onClick }) => {
    return (
        <button
            className={className}
            type='submit'
            onClick={onClick} >
            {text}
        </button>
    )
}
export default Button;
