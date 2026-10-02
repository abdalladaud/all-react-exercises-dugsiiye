function CheckboxGroup({
  skills,
  selectedSkills,
  onChange,
  error,
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-medium text-[#333]">
        Skills
      </label>

      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        {skills.map((skill) => (
          <label
            key={skill}
            className="flex items-center gap-2 text-[10px] text-[#444]"
          >
            <input
              type="checkbox"
              value={skill}
              checked={selectedSkills.includes(skill)}
              onChange={onChange}
              className="h-3 w-3 accent-[#f50046]"
            />

            {skill}
          </label>
        ))}
      </div>

      {error && (
        <p className="mt-2 text-[9px] font-semibold text-[#ef3340]">
          {error}
        </p>
      )}
    </div>
  );
}

export default CheckboxGroup;