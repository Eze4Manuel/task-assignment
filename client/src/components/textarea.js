/* 
* This is a Textarea component
*/
const TextArea = ({ label, value, onChange, className, labelStyles }) => {
    return (
        <div className="flex flex-col">
            <label
                className={labelStyles}>
                {label}
            </label>
            <textarea
                className={className}
                type="text"
                value={value}
                onChange={onChange}>
            </textarea>
        </div>
    )
}
export default TextArea