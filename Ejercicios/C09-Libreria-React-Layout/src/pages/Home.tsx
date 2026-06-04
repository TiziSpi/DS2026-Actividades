import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main
      style={{
        padding: '3rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <section
        style={{
          backgroundColor: '#fff',
          borderRadius: '14px',
          padding: '3rem',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        }}
      >
        <h1 style={{ color: '#6d4c5b', marginBottom: '1rem' }}>
          📚 Mi Librería
        </h1>

        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Bienvenido a nuestra colección de libros.
        </p>

        <Link
          to="/libros"
          style={{
            textDecoration: 'none',
            padding: '0.8rem 1.5rem',
            backgroundColor: '#f4c2c2',
            color: '#6d4c5b',
            borderRadius: '8px',
            fontWeight: 'bold',
          }}
        >
          Ver Catalogo
        </Link>
      </section>
    </main>
  )
}