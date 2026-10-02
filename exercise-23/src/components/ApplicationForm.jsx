import { useState } from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import CheckboxGroup from "./CheckboxGroup";
import { validateForm } from "../utils/validation";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Product Manager",
];

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Python",
  "Java",
  "UI Design",
  "API Development",
];

const initialForm = {
  fullName: "",
  email: "",
  role: "",
  experience: "",
  skills: [],
  terms: false,
  notifications: false,
};

function ApplicationForm() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedData);

    const validationErrors = validateForm(updatedData);

    setErrors((prev) => ({
      ...prev,
      [name]: validationErrors[name],
    }));
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    const updatedSkills = checked
      ? [...formData.skills, value]
      : formData.skills.filter((skill) => skill !== value);

    const updatedData = {
      ...formData,
      skills: updatedSkills,
    };

    setFormData(updatedData);

    const validationErrors = validateForm(updatedData);

    setErrors((prev) => ({
      ...prev,
      skills: validationErrors.skills,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    const updatedData = {
      ...formData,
      [name]: checked,
    };

    setFormData(updatedData);

    const validationErrors = validateForm(updatedData);

    setErrors((prev) => ({
      ...prev,
      [name]: validationErrors[name],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Submitted Data:", formData);

    alert("Application submitted successfully!");
  };

  return (
    <div className="w-full max-w-[430px]">
      <div className="rounded-lg bg-white px-5 py-6 shadow-[0_2px_12px_rgba(0,0,0,0.12)] sm:px-6">
        
        {/* Title */}
        <h1 className="mb-6 text-center text-[18px] font-bold text-[#222]">
          Developer Application Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <FormInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            placeholder=""
          />

          {/* Email */}
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder=""
          />

          {/* Role */}
          <FormSelect
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            error={errors.role}
            options={roles}
          />

          {/* Experience */}
          <FormInput
            label="Years of Experience"
            name="experience"
            type="number"
            value={formData.experience}
            onChange={handleChange}
            error={errors.experience}
            placeholder=""
            min="0"
            max="50"
          />

          {/* Skills */}
          <CheckboxGroup
            skills={skills}
            selectedSkills={formData.skills}
            onChange={handleSkillChange}
            error={errors.skills}
          />

          {/* Terms */}
          <div className="pt-1">
            <label className="flex items-center gap-2 text-[11px] text-[#333]">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleCheckboxChange}
                className="h-3 w-3 accent-[#f40046]"
              />

              I agree to the terms and conditions
            </label>

            {errors.terms && (
              <p className="mt-2 text-[10px] font-medium text-[#ef3340]">
                {errors.terms}
              </p>
            )}
          </div>

          {/* Notifications */}
          <label className="flex items-center gap-2 text-[11px] text-[#555]">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleCheckboxChange}
              className="h-3 w-3 accent-[#f40046]"
            />

            Receive notifications about new opportunities
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="mt-1 w-full rounded-md bg-[#f50046] py-2 text-[11px] font-bold text-white shadow-sm transition hover:bg-[#d9003d] focus:outline-none focus:ring-2 focus:ring-[#f50046] focus:ring-offset-1"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;