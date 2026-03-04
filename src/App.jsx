import './App.css'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <p className="signup-subtitle">Create your account</p>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" aria-label="Name" />
        <input type="email" placeholder="Email" aria-label="Email" />
        <input type="password" placeholder="Password" aria-label="Password" />
        <button type="submit">Sign Up</button>
      </form>
      <p className="signup-footer">
        Already have an account? <a href="#">Log in</a>
      </p>
    </div>
  )
}

export default App
