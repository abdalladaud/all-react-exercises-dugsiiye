import useForm from "../hooks/useForm";

function ContactForm() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", values);

    resetForm();
  };

  return (
    <div>
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />

          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />

          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <br />

        <div>
          <label>Message</label>
          <br />

          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
        </div>

        <br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;