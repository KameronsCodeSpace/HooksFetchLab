import { useState } from 'react';

const userInputHook = (initialValue) => {
    const [ value, setValue ] = useState(initialValue)

    const handleChange = event => {
        setValue(event.target.value);
    }

    return [ value, handleChange ];
}

export default userInputHook