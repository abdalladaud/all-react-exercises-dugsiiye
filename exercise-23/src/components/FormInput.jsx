function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  min,
  max,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-[10px] font-medium text-[#333]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        max={max}
        className={`h-6 w-full rounded-[5px] border bg-white px-2 text-[11px] outline-none transition
          ${
            error
              ? "border-[#f1a0a8] focus:border-[#ef3340] focus:ring-1 focus:ring-[#ffd5d9]"
              : "border-[#cfcfcf] focus:border-[#888] focus:ring-1 focus:ring-[#ddd]"
          }`}
      />

      {error && (
        <p className="mt-1 text-[9px] font-semibold text-[#ef3340]">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormInput;