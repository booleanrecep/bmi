import { useEffect, useRef } from "react";
import { Button } from "..";
import { Input } from "../Input/Input";
import { Form } from "./Form";
import { useContext } from "react";
import { BMIContext } from "../../state/provider";

export const BMICatForm = () => {
  const formRef = useRef();

  const {
    setFormData,
    toggleModal,
    calculateBmi,
    randomCatFact,
    state: { bmiRes },
  } = useContext(BMIContext);

  const submitData = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const formData = {
      pet_type: "CAT",
      name: data.get("name"),
      birthday: Date.now(data.get("birthday")),
      height_unit: "cm",
      gender: data.get("gender"),
      upper_bmi_limit: 30,
      lower_bmi_limit: 12,
      lim: data.get("lim"),
      ribcage: data.get("ribcage"),
    };
    setFormData(formData);
    calculateBmi(formData);
  };
  useEffect(() => {
    randomCatFact();

    if (bmiRes.status === 200) {
      toggleModal(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bmiRes.status]);

  return (
    <Form ref={formRef}>
      <Input name="name" label="Your cat's name" type="text" />
      <Input name="birthday" label="Birthday" type="date" />
      <Input name="gender" label="Gender" type="select" />
      <Input name="ribcage" label="Ribcage" type="number" />
      <Input name="lim" label="LIM" type="number" />
      {bmiRes.status === 400 ? (
        <div
          class="bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-1"
          role="alert"
        >
          <p>{bmiRes.message}</p>
        </div>
      ) : null}
      <Button title="Calculate" onClick={submitData} />
    </Form>
  );
};
