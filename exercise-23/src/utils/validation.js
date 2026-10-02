export const validateForm = (formData) => {
  const errors = {};

  // Full Name
  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required";
  } else if (
    !/^[A-Za-z ]{2,30}$/.test(formData.fullName.trim())
  ) {
    errors.fullName =
      "Name must contain only letters and spaces";
  }

  // Email
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
  ) {
    errors.email = "Please enter a valid email";
  }

  // Role
  if (!formData.role) {
    errors.role = "Please select a role";
  }

  // Experience
  if (formData.experience === "") {
    errors.experience = "Experience is required";
  } else if (
    Number(formData.experience) < 0 ||
    Number(formData.experience) > 50
  ) {
    errors.experience =
      "Experience must be between 0 and 50";
  }

  // Skills
  if (formData.skills.length === 0) {
    errors.skills = "Please select at least one skill";
  }

  // Terms
  if (!formData.terms) {
    errors.terms = "You must agree to the terms";
  }

  return errors;
};