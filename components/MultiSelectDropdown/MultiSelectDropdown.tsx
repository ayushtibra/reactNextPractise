import { useEffect, useRef, useState } from "react";
import { CloseIcon, Icon } from "../Icons/Icon";

const MultiSelectDropdown = ({
  className,
  placeHolder,
  options,
  isMulti,
  isSearchable,
  selectAll,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(isMulti ? [] : null);
  const [showMenu, setShowMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef();

  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  // To close dropdown menu when click outside
  useEffect(() => {
    const handleOutsideClick = () => {
      setShowMenu(false);
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  });

  // To show values when item selected or return placeholder when not
  const getValues = () => {
    if (!selectedValue || selectedValue.length == 0) {
      return placeHolder;
    }

    if (isMulti) {
      return (
        <div className="dropdown-tags">
          {selectedValue?.map((option) => (
            <div key={option.value} className="dropdown-tag-item">
              {option.label}
              <span
                onClick={(e) => onTagRemove(e, option)}
                className="dropdown-tag-close"
              >
                <CloseIcon />
              </span>
            </div>
          ))}
        </div>
      );
    }

    return selectedValue.label;
  };

  // To open dropdown menu when click on input
  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  // To set value when dropdown item click
  const handleItemClick = (option) => {
    let newValue;
    if (isMulti) {
      if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
        newValue = removeOption(option);
      } else {
        if (option.label == "Select All") {
          newValue = [...options.slice(0)];
        } else {
          newValue = [...selectedValue, option];
        }
      }
    } else {
      newValue = option;
    }

    setSelectedValue(newValue);
    onChange && onChange(newValue);

    // When Pass select all object in options array itself START
    // let newValue;
    // if (isMulti) {
    //   if (selectedValue.findIndex((o) => o.value === option.value) >= 0) {
    //     newValue = removeOption(option);
    //   } else {
    //     if (option.label == "Select All") {
    //       newValue = [...options.slice(1)];
    //     } else {
    //       newValue = [...selectedValue, option];
    //     }
    //   }
    // } else {
    //   newValue = option;
    // }
    // console.log(newValue);
    // setSelectedValue(newValue);
    // onChange && onChange(newValue);
    // END
    // ----------------------------------------------------------------------------
    // Another Way
    // let value;
    // if (isMulti) {
    //   if (!selectedValue?.includes(option)) {
    //     value = [...selectedValue, option];
    //   } else {
    //     value = selectedValue;
    //   }
    // } else {
    //   value = option;
    // }
    // setSelectedValue(value);
  };

  // To highlight selected items in dropdown menu
  const isSelected = (option) => {
    if (!selectedValue || selectedValue.length == 0) {
      return false;
    }

    if (isMulti && selectedValue.length > 0) {
      return (
        selectedValue.filter((item) => item.value == option.value).length > 0
      );
    }

    return option.value == selectedValue.value;
  };

  // If item already existed in values, than remove that option if user again clicks
  const removeOption = (option) => {
    return selectedValue?.filter((o) => o.value !== option.value);
  };

  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValue(newValue);
    onChange && onChange(newValue);
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
      if (selectAll && selectAll.length > 0) {
        return [...selectAll, ...options];
      }

      return options;
    }

    return options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  return (
    <>
      <div className={`dropdown-container  ${className}`}>
        <div className="dropdown-input" onClick={handleInputClick}>
          <div className="dropdown-selected-value">{getValues()}</div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
              <Icon />
            </div>
          </div>
        </div>
        {showMenu && (
          <div className="dropdown-menu">
            {isSearchable && (
              <div className="search-box">
                <input
                  onChange={onSearch}
                  value={searchValue}
                  ref={searchRef}
                />
              </div>
            )}
            {getOptions()?.map((option) => (
              <div
                key={option.value}
                className={`dropdown-item ${isSelected(option) && "selected"}`}
                onClick={() => handleItemClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MultiSelectDropdown;
