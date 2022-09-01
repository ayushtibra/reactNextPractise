import { useEffect, useState } from "react";
import FormComponent from "../components/FormComponent/FormComponent";
import MultiSelectDropdownNew from "../components/MultiSelectDropdown/MultiSelectDropdown";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const options = [
  // { value: "select all", label: "Select All" },
  { value: "green", label: "Greens" },
  { value: "red", label: "Red" },
  { value: "yellow", label: "Yellow" },
  { value: "blue", label: "Blue" },
];

const CustomMultiSelectDropDown = () => {
  return (
    <>
      <FormComponent />
    </>
  );
};

export default CustomMultiSelectDropDown;
