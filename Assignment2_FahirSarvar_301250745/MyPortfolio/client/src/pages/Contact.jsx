import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  // useState creates a piece of data ("state") that React remembers between renders.
  // formData holds the current values of every input box.
  // setFormData is the function we call to update it.
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })

  // useNavigate lets us redirect the user to another page from JavaScript code.
  const navigate = useNavigate()

  // This function runs every time the user types in ANY input box.
  // "e" is the event object — it tells us which input changed and its new value.
  function handleChange(e) {
    const { name, value } = e.target

    // We copy the old formData with "...formData", then overwrite just the one
    // field that changed (using the input's "name" attribute as the key).
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // This function runs when the form is submitted.
  function handleSubmit(e) {
    e.preventDefault() // stops the browser from doing a full page reload

    console.log('Message submitted:', formData)
    // In a real app you'd send formData to a server here.

    navigate('/') // redirect back to the Home page
  }

  return (
    <section className="page contact-page">
      <h1>Contact Me</h1>

      <div className="contact-info">
        <p>Email: Fahir.Sarvar@gmail.com</p>
        <p>Phone: (437) 4632552</p>
        <p>Location: Toronto, Ontario</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Contact Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </label>

        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  )
}

export default Contact
