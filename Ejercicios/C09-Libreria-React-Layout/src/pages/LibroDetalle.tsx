import { Link, useParams } from 'react-router-dom'

export default function LibroDetalle() {
  const { id } = useParams()

  return (
    <main
      style={{
        textAlign: 'center',
        padding: '3rem',
      }}
    >
      <h1
        style={{
          color: '#6d4c5b',
          marginBottom: '1rem',
        }}
      >
        Detalle del Libro
      </h1>

      <p
        style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
        }}
      >
        ID del libro: {id}
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
        Volver al catálogo
      </Link>
    </main>
  )
}