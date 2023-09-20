import { useState } from "react";

const useHandleValue = (initValue) => {
    const [formData, setFormData] = useState(initValue);

    const handleValue = e => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return {
        formData,
        handleValue
    }
}
export default useHandleValue;
