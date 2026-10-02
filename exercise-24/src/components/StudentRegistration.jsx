import { useForm } from "react-hook-form";

function StudentRegistration() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      grade: "",
      subjects: [],
    },
  });

  const selectedSubjects = watch("subjects");

  const onSubmit = (data) => {
    console.log("Student Registration Data:", data);

    alert(
      `Registration successful!\n\n` +
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Grade: ${data.grade}\n` +
        `Subjects: ${data.subjects.join(", ")}`
    );

    // Bonus: save to localStorage
    localStorage.setItem(
      "studentRegistration",
      JSON.stringify(data)
    );
  };

  const handleReset = () => {
    reset();
    localStorage.removeItem("studentRegistration");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white p-7 rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-7">
          Student Registration
        </h1>

        {/* Student Name */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">
            Student Name
          </label>

          <input
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name can only contain letters and spaces",
              },
            })}
            className={`w-full px-3 py-2.5 border rounded-md outline-none ${
              errors.name
                ? "border-red-500"
                : "border-gray-400"
            }`}
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">
            Email
          </label>

          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className={`w-full px-3 py-2.5 border rounded-md outline-none ${
              errors.email
                ? "border-red-500"
                : "border-gray-400"
            }`}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Grade */}
        <div className="mb-5">
          <label className="block text-sm font-semibold mb-2">
            Grade Level
          </label>

          <select
            {...register("grade", {
              required: "Please select a grade",
            })}
            className={`w-full px-3 py-2.5 border rounded-md bg-white ${
              errors.grade
                ? "border-red-500"
                : "border-gray-400"
            }`}
          >
            <option value="">Select Grade</option>
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 11">Grade 11</option>
            <option value="Grade 12">Grade 12</option>
          </select>

          {errors.grade && (
            <p className="text-red-500 text-sm mt-1">
              {errors.grade.message}
            </p>
          )}
        </div>

        {/* Subjects */}
        <div className="mb-6">
          <p className="text-sm font-semibold mb-3">
            Subjects Interest
          </p>

          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Mathematics"
                {...register("subjects", {
                  validate: (value) =>
                    value.length > 0 ||
                    "Select at least one subject",
                })}
                className="w-4 h-4 accent-pink-500"
              />
              Mathematics
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="Science"
                {...register("subjects")}
                className="w-4 h-4 accent-pink-500"
              />
              Science
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                value="English"
                {...register("subjects")}
                className="w-4 h-4 accent-pink-500"
              />
              English
            </label>
          </div>

          {errors.subjects && (
            <p className="text-red-500 text-sm mt-2">
              {errors.subjects.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white font-medium py-2.5 rounded-md"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 rounded-md"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentRegistration;