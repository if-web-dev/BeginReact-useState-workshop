"use client"

import clsx from 'clsx';


export default function Input({label, type, ...props}) {

  const inputClasses = clsx({
    'file-input file-input-sm file-input-bordered file-input-primary': type === 'file',
    'range range-primary range-sm': type === 'range',
  })
  return (
    <div className="flex flex-col">
      <label className="label-text label">{label}</label>
      <input type={type} className={inputClasses} {...props} />
      {/*error && <span className="error">{error}</span>*/}
    </div>
  );
}
