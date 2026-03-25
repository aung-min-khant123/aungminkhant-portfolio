import React, { useState } from 'react'

function ContactMe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validate = () => {
    const e = {}
    if (!name.trim()) e.name = 'Please enter your name.'
    if (!email.trim()) e.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'Please enter a valid email.'
    if (!message.trim() || message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
    return e
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return

    try {
      setStatus('sending')
      // Simulate send delay. Replace with actual API call if available.
      await new Promise((res) => setTimeout(res, 900))
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
      setErrors({})
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id='contact' className="max-w-2xl mx-auto p-6 bg-white/80 dark:bg-slate-800/60 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col">
            <span className="text-sm font-medium">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              placeholder="Your name"
            />
            {errors.name && <span id="name-error" className="text-xs text-red-500 mt-1">{errors.name}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="you@example.com"
            />
            {errors.email && <span id="email-error" className="text-xs text-red-500 mt-1">{errors.email}</span>}
          </label>
        </div>

        <label className="flex flex-col mt-4">
          <span className="text-sm font-medium">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className={`mt-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
            placeholder="Write your message..."
          />
          {errors.message && <span id="message-error" className="text-xs text-red-500 mt-1">{errors.message}</span>}
        </label>

        <div className="flex items-center gap-4 mt-5">
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-60"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && <p className="text-sm text-green-600">Message sent — I will get back to you soon.</p>}
          {status === 'error' && <p className="text-sm text-red-600">Something went wrong. Please try again.</p>}
        </div>
      </form>
    </section>
  )
}

export default ContactMe