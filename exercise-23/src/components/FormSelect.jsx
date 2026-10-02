function FormSelect({
  label,
  name,
  value,
  onChange,
  error,
  options,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-[10px] font-medium text-[#333]"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`h-6 w-full rounded-[5px] border bg-white px-2 text-[10px] outline-none
          ${
            error
              ? "border-[#f1a0a8] focus:border-[#ef3340]"
              : "border-[#cfcfcf] focus:border-[#888]"
          }`}
      >
        <option value="">Select a role</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-[9px] font-semibold text-[#ef3340]">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormSelect;