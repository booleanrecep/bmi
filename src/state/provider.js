import axios from "axios";
import { createContext, useState } from "react";
import { api } from "../api/service";

export const BMIContext = createContext({});

export const BMIProvider = ({ children }) => {
  const [state, setState] = useState({
    bmiRes: {},
    formData: {},
    isModalOpen: false,
    randomCatInfo: "",
    randomDogInfo: "",
    dogBreeds: [],
  });

  const setFormData = (data) => {
    setState((prevState) => ({
      ...prevState,
      formData: data,
    }));
  };

  const toggleModal = (toogle) => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: toogle,
    }));
  };
  const clearState = () => {
    setState((prevState) => ({
      ...prevState,
      bmiRes: {},
      formData: {},
      isModalOpen: false,
    }));
  };

  const calculateBmi = async (data) => {
    try {
      const res = await api.post("/", data);
      setState((prevState) => ({
        ...prevState,
        bmiRes: res,
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        bmiRes: { message: "Something is wrong!", status: 400 },
      }));
    }
  };
  const randomCatFact = () => {
    axios.get("https://catfact.ninja/fact?max_length=100").then((res) =>
      setState((prevState) => ({
        ...prevState,
        randomCatInfo: res.data,
      }))
    );
  };

  const getDogBreeds = () => {
    axios.get("https://api.thedogapi.com/v1/breeds").then((res) =>
      setState((prevState) => ({
        ...prevState,
        dogBreeds: res.data,
      }))
    );
  };

  return (
    <BMIContext.Provider
      value={{
        state,
        toggleModal,
        calculateBmi,
        setFormData,
        clearState,
        randomCatFact,
        getDogBreeds,
      }}
    >
      {children}
    </BMIContext.Provider>
  );
};
