import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      contact: "",
      organization: "",
      delegates: "Regular",
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:5000/api/register', formData);
          alert('Registration successful, email sent!');
        } catch (error) {
          console.error(error);
          alert('Error registering.');
        }
    };
  
    return (
      <section className="py-16 bg-gray-200">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-6">Register for GWECCC 2025</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md rounded">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contact No.</label>
            <input
              type="text"
              name="contact"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Organization</label>
            <input
              type="text"
              name="organization"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Delegates</label>
            <select
              name="delegates"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={handleChange}
            >
              <option value="Regular">Regular</option>
              <option value="VIP">VIP</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Register
          </button>
        </form>
      </section>
    );
  };
  
export default RegistrationForm