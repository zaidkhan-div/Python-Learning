// Functions need to exist when they are called, not when they are defined.

const onSubmit = () => {
    handleClick(); // here it works because the onSubmit runs after all so at the time it runs the handleClick already exist in the memory (windows/Context)
}

handleClick(); // here i can't call it 
const handleClick = () => { } // now this is not callable before the execution 