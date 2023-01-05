const formValidator = {}

// validate Partner form
formValidator.validateWordChecker = (values, builder, setError) => {
    setError("");

    //validate the sentence
    if (!values.sentence) {
        return setError("No word passed in field")
    }
    if (values?.sentence.length === 0) {
        return setError("Field cannot be empty")
    } else {
        builder.sentence = values.sentence
    }

    // return payload
    return builder
}


export default formValidator