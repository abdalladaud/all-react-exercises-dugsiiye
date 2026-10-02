import { useReducer, useState } from "react";
import {
  initialState,
  contactReducer,
} from "./ContactReducer";

function ContactApp() {
  const [contacts, dispatch] = useReducer(
    contactReducer,
    initialState
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Add / Edit contact
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone) {
      alert("Please fill in all fields.");
      return;
    }

    if (editingId === null) {
      // Add
      dispatch({
        type: "add",
        payload: form,
      });
    } else {
      // Edit
      dispatch({
        type: "edit",
        payload: {
          id: editingId,
          ...form,
        },
      });

      setEditingId(null);
    }

    // Clear form
    setForm({
      name: "",
      email: "",
      phone: "",
    });
  };

  // Start editing
  const handleEdit = (contact) => {
    setForm({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });

    setEditingId(contact.id);
  };

  // Delete
  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });

    // If deleting currently edited contact
    if (editingId === id) {
      setEditingId(null);

      setForm({
        name: "",
        email: "",
        phone: "",
      });
    }
  };

  // Favorite
  const handleFavorite = (id) => {
    dispatch({
      type: "toggleFavorite",
      payload: id,
    });
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingId(null);

    setForm({
      name: "",
      email: "",
      phone: "",
    });
  };

  // Search
  const filteredContacts = contacts.filter((contact) =>
    contact.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Contact Management App</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <h2>
          {editingId === null
            ? "Add Contact"
            : "Edit Contact"}
        </h2>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <br />

        <button type="submit">
          {editingId === null
            ? "Add Contact"
            : "Update Contact"}
        </button>

        {editingId !== null && (
          <button
            type="button"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        )}
      </form>

      <hr />

      {/* SEARCH */}
      <h2>Contacts</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      {/* CONTACT LIST */}
      {filteredContacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        filteredContacts.map((contact) => (
          <div
            key={contact.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px",
              backgroundColor: contact.favorite
                ? "#fff3cd"
                : "white",
            }}
          >
            <h3>
              {contact.name}

              {contact.favorite && " ⭐"}
            </h3>

            <p>
              <strong>Email:</strong>{" "}
              {contact.email}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {contact.phone}
            </p>

            <button
              onClick={() =>
                handleFavorite(contact.id)
              }
            >
              {contact.favorite
                ? "Remove Favorite"
                : "Add Favorite"}
            </button>

            {" "}

            <button
              onClick={() => handleEdit(contact)}
            >
              Edit
            </button>

            {" "}

            <button
              onClick={() =>
                handleDelete(contact.id)
              }
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ContactApp;