import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import MultiSelectDropdown from "../MultiSelectDropdown/MultiSelectDropdown";

const options = [
  // { value: "select all", label: "Select All" },
  { value: "green", label: "Greens" },
  { value: "red", label: "Red" },
  { value: "yellow", label: "Yellow" },
  { value: "blue", label: "Blue" },
];

const FormComponent = () => {
  const [selectVechile, setSelectVechile] = useState("");

  const methods = useForm({
    mode: "onChange",
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;

  const handleForm = (data) => {
    console.log(data);
  };

  const handleChange = (changData) => {
    // const daTa = [...selectVechile, changData.target.value];
    // console.log(daTa);
    // setSelectVechile(daTa);
    // setSelectVechile((prevV) => [...prevV, changData.target.value]);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          className="w-[50%] mx-auto my-20 p-12 border border-solid border-black"
          onSubmit={handleSubmit(handleForm)}
        >
          <input
            className="border border-solid border-[#ccc] block mb-4 w-full p-1"
            placeholder="Address"
            type="text"
            id="address"
            {...register("address")}
          />
          <input type="hidden" {...register("country_code")} value="IN" />

          {/* Add Provision for changing Icon as well */}
          {/* Add Provision for required  */}
          {/* Add Provision Any Default Value Selected */}
          {/* Add Provision closeMenuOnSelect or closeMenuOnScroll */}
          {/* Provide option to select height of dropdown  */}
          {/* Provision if they want selected value highlighted in dropdown or removed from dropdown when selected */}
          <MultiSelectDropdown
            className="mb-4 customClass"
            placeHolder="Search Values"
            options={options}
            isMulti
            isSearchable
            // selectAll
            selectAll={[{ value: "select all", label: "Select All" }]}
            onChange={(value) => setValue("selectInputNew", value)}
          />

          <button
            className="p-2 bg-white text-black rounded border"
            type="submit"
          >
            Submit
          </button>
        </form>
      </FormProvider>

      <p>{errors?.vechile?.message}</p>
    </>
  );
};

export default FormComponent;

{
  /* <select
          value={selectVechile}
          className="mb-4 block w-[205px]"
          {...register("vechile", {
            required: {
              message: "Please select",
              value: true,
            },
            onChange: handleChange,
          })}
        >
          <option value="" hidden disabled>
            Select
          </option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Train">Train</option>
          <option value="Plave">Plave</option>
        </select> */
}
