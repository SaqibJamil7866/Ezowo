import React, { useState } from "react";
import { useController, Controller } from "react-hook-form";
import Select from 'react-select'
import _ from 'lodash';

export const SelectField = React.forwardRef((props, ref) => {

    const [focusState, setFocusState] = useState(false);
    const { title, style, type, errors, defaultValue,isHighLight=false,isDisabled=false, ...others } = props;
    const { field, fieldState } = useController(props);
    let err = _.get(errors, props.name)

    const getOptionLabel = (e) => {
        if (props.getOptionLabel) {
          return props.getOptionLabel(e);
        } else {
          return e[props.showLabel || "label"];
        }
    };

    return (
        <>

            <div className={`${style ? style : ''} h-[35px] min-h-[35px] relative border border-gray bg-white  outlineStyle rounded ${props.rules && err ? "focus-within:border-red-600 border-red-600" : "focus-within:border-teal-c-900"}`}>
                {/* <label
                    htmlFor="name"
                    className={`pointer-events-none absolute  bg-white left-2 -mt-px inline-block px-2 font-normal  ${props.rules && err ? "text-red-600" : "text-gray-600"} ${focusState || (field.value !== "" && field.value)
                        ? "-top-2 duration-300 text-xs rounded-lg"
                        : `custom-top duration-200 text-base font-normal `
                        }
                        ${isDisabled ? " bg-gray-100 z-10" : "bg-wite" } 
                        ${isHighLight && " bg-highLight" }
                        `}
                >
                </label> */}
                <Controller
                    name={props?.name}
                    control={props?.control}
                    rules={props?.rules}
                    defaultValue={defaultValue}
                    render={({ field }) => (
                        <Select
                        {...field}
                        options={props?.optionData}
                        getOptionLabel={getOptionLabel}
                        getOptionValue={(option) => option[props.showLabel || "label"]} // changes here!!!
                        onChange={e => {
                            if (props.onChange) {
                                props.onChange(e);
                            }
                        }}
                        isClearable={true}
                        disabled={isDisabled ? isDisabled :false}
                      />

                    )}
                />

            </div>
            {props.rules && err &&
                <p className=" text-xs text-red-600 h-3" id="email-error">
                    {props.rules && err && (
                        props.rules && err?.message
                    )}
                </p>
            }
        </>
    );
});