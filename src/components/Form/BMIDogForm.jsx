import { useEffect, useRef } from "react";
import { Button } from "..";
import { Input } from "../Input/Input";
import { Form } from "./Form";
import { useContext } from "react";
import { BMIContext } from "../../state/provider";

export const BMIDogForm = () => {
  const formRef = useRef();

  const {
    setFormData,
    toggleModal,
    calculateBmi,
    getDogBreeds,
    state: { bmiRes, dogBreeds },
  } = useContext(BMIContext);

  const submitData = () => {
    const data = new FormData(formRef.current);
    const formData = {
      pet_type: "DOG",
      name: data.get("name"),
      birthday: Date(data.get("birthday")),
      height_unit: "cm",
      gender: data.get("gender"),
      upper_bmi_limit: 60,
      lower_bmi_limit: 58,
      weight_unit: "kg",
      weight: data.get("weight"),
      height: data.get("height"),
      breed_id: "992",
    };
    setFormData(formData);
    calculateBmi(formData);
  };
  useEffect(() => {
    getDogBreeds();
    if (bmiRes.status === 200) {
      toggleModal(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bmiRes.status]);
  return (
    <Form ref={formRef}>
      <Input name="name" label="Your dog's name" type="text" />
      <Input name="birthday" label="Birthday" type="date" />
      <Input name="gender" label="Gender" type="select" />
      <Input name="breed" label="Ribcage" type="select" dropArray={dogBreeds} />
      <Input name="weight" label="Weight" type="number" />
      <Input name="height" label="Height to Shoulder" type="number" />
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
