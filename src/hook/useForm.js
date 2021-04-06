import { useState } from "react";

const useForm = (initial = {}) => {
  const [inputs, setInputs] = useState(initial);

  const handleChange = (e) => {
    let { value, name, type } = e.target;
    if (type === "number") {
      value = parseInt(value);
    }
    if (type === "file") {
      value = e.target.files[0];
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const fetchForm = (form) => {
    const newValues = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, value])
    );
    setInputs(newValues);
  };

  return {
    handleChange,
    inputs,
    fetchForm,
  };
};

export default useForm;
