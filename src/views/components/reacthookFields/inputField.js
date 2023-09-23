import React from "react";
import { useController, Controller } from "react-hook-form";
import { Input } from "reactstrap";
import _ from 'lodash';

export const InputField = React.forwardRef((props, ref) => {
  const { field, fieldState } = useController(props);
  const { title, style, type='text', isHighLight=false, errors, defaultValue, customStyle, onChange, ellipses,isDisabled=false, ...others } = props;
  let err = _.get(errors, props.name)
  return (
    <div className="w-full">
      <div className={`${customStyle ? customStyle : 'h-[35px]'}  relative w-full border border-gray ${style ? 'bg-white' : ''} bg-white focus-within:bg-white outlineStyle rounded ${props?.rules && err ? "focus-within:border-red-600 border-red-600" : "focus-within:border-teal-c-900"}`}>
        <Controller
          name={props?.name}
          control={props?.control}
          rules={props?.rules}
          defaultValue={defaultValue}
          render={({ field }) => (
            <Input autoFocus
            type={type}
            placeholder={props.placeholder ? props.placeholder : ''}
            disabled={isDisabled ? isDisabled :false}
            invalid={err} {...field} />
          )}
        />
        <div
          className={`pointer-events-none absolute ml-2 left-0 duration-300 origin-0 mr-2 inline-block px-1 font-normal  ${props?.rules && err ? "text-red-600" : "text-gray-600"}  ${!field.value == "" || field.value == "0"
            ? "-top-2 duration-300 bg-[white] text-xs rounded-lg"
            : `top-2 duration-300 text-base xl:top-1 ${ellipses && 'w-[98%] text-ellipsis overflow-hidden whitespace-nowrap'}`
            } 
            ${isHighLight && " bg-highLight  "}  
            `}
        >
        </div>

      </div>
      {props.rules && err &&
      <p className=" text-xs text-red-600 h-3" id="email-error">
        {props.rules && err && (
          props.rules && err?.message
        )}
      </p>
      }
    </div>
  );
});