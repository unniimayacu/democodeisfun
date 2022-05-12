import React from 'react'
import "./main.scss";
// import Select from "react-select";
import Select from "react-select-me";
import "react-select-me/lib/ReactSelectMe.css";
import { useState } from "react";

function Selectbox(props) {
  const {
    defaultValue = [],
    wrapperClass = "",
    selectControlClass = "",
    listClass = "",
    optionsClass = "",
    selectedOptionClass = "",
    type = "primary",
    rounded = false,
    size = "md",
    options,
    multiple = false,
    searchable = false,
    ...rest
  } = props;
  const [val, setVal] = useState(defaultValue);

  // overriding default styles
  const classNames = {
    dd__wrapper: `${type === "primary" ? "cif__select-wrapper" : ""} ${
      type === "transparent" ? "cif__select-wrapper-transparent" : ""
    } ${multiple ? "cif__select-wrapper-multiple-" + type : ""}
    ${type === "underlined" ? "cif__select_underlined_wrapper" : ""} 
    ${wrapperClass}`,
    dd__selectControl: ` ${type === "primary" ? "cif__select-control" : ""}  ${
      type === "secondary" ? "cif__select-secondary cif__select-control" : ""
    } ${rounded === true ? "cif__select-rounded" : ""}
      ${type === "transparent" ? "cif__select-control-transparent" : ""} 
      ${type === "underlined" ? "cif__select_underlined_control" : ""}
      ${selectControlClass}`,
    dd__option: `${
      type === "transparent"
        ? "cif__select-option-transparent"
        : "cif__select-option"
    }  
    ${type === "underlined" ? "cif__select_underlined_option" : ""}
    ${optionsClass}`,
    dd__selectedOption: ` ${
      type === "transparent"
        ? "cif__select-selected-option-transparent"
        : "cif__select-selected-option"
    }  
    ${type === "underlined" ? "cif__select_underlined_selected_option" : ""}
    ${selectedOptionClass}`,
  };

  // function to render icon
  const renderIcon = (isOpen) => {
    return (
      <span class="material-icons">
        {isOpen ? "Select student " : "keyboard_arrow_down"}
      </span>
    );
  };
  return (
    <>
      <Select
        s={classNames}
        value={val}
        onChange={(value) => setVal(value)}
        options={options}
        iconRenderer={renderIcon}
        multiple={multiple}
        searchable={searchable}
        {...rest}
      />


      {/* <div>
       
        <select
          className="form-select text__color fw-normal text__size px-5 py-2  p-2 text-start"
          aria-label="Default select example"
        >
          <option selected className="">
            Select Student Name
          </option>
          <option value="1">One</option>
        </select>
       
      </div> */}
    </>
  );
}

export default Selectbox