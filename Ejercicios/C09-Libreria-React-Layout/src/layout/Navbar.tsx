import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#f4c2c2',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <h2
        style={{
          margin: 0,
          color: '#6d4c5b',
        }}
      >
        📚 Mi Librería
      </h2>

      <div
        style={{
          display: 'flex',
          gap: '1rem',
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            backgroundColor: '#fff',
            color: '#6d4c5b',
            padding: '0.6rem 1rem',
            borderRadius: '8px',
            fontWeight: 'bold',
          }}
        >
          Home
        </Link>

        <Link
          to="/libros"
          style={{
            textDecoration: 'none',
            backgroundColor: '#fff',
            color: '#6d4c5b',
            padding: '0.6rem 1rem',
            borderRadius: '8px',
            fontWeight: 'bold',
          }}
        >
          Catalogo
        </Link>
      </div>
    </nav>
  )
}