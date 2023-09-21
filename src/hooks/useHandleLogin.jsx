import { useState } from "react";

const useHandleLogin = initValue => {
    const [info, setInfo] = useState(initValue);

    const handleChange = e => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value
        });
    }

    return { info, handleChange }
}

export default useHandleLogin;
