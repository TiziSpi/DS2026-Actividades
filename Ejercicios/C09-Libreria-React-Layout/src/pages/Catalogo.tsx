import { useState } from 'react'
import BookCard from '../components/BookCard'

const allBooks = [
  {
    id: 1,
    title: 'El Señor de los Anillos',
    author: 'J.R.R. Tolkien',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg',
    price: 25000,
  },
  {
    id: 2,
    title: 'El Hobbit',
    author: 'J.R.R. Tolkien',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg',
    price: 19000,
  },
  {
    id: 3,
    title: 'Harry Potter y la Piedra Filosofal',
    author: 'J.K. Rowling',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1474154022i/3.jpg',
    price: 18000,
  },
  {
    id: 4,
    title: '1984',
    author: 'George Orwell',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532714506i/40961427.jpg',
    price: 15000,
  },
  {
    id: 5,
    title: 'Rebelión en la Granja',
    author: 'George Orwell',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1325861570i/170448.jpg',
    price: 14000,
  },
  {
    id: 6,
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg',
    price: 19000,
  },
  {
    id: 7,
    title: 'Crimen y Castigo',
    author: 'Fiódor Dostoyevski',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1382846449i/7144.jpg',
    price: 28000,
  },
  {
    id: 8,
    title: 'Dune',
    author: 'Frank Herbert',
    cover:
      'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1434908555i/234225.jpg',
    price: 22000,
  },
]

export default function Catalogo() {
  const [query, setQuery] = useState('')

  const filtered = allBooks.filter(
    book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main
      style={{
        padding: '3rem 1.5rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <section
        style={{
          backgroundColor: '#fff',
          borderRadius: '14px',
          padding: '2rem',
          maxWidth: '1200px',
          width: '100%',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          <input
            type="text"
            placeholder="Buscar por título o autor..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '450px',
              padding: '0.8rem 1rem',
              borderRadius: '10px',
              border: '1px solid #e7c8cf',
              fontSize: '1rem',
            }}
          />
        </div>

        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            marginBottom: '2rem',
            color: '#2b3a2b',
            textAlign: 'center',
          }}
        >
          {query ? `Resultados para "${query}"` : 'Colección de Libros'}
        </h2>

        {filtered.length === 0 ? (
          <p
            style={{
              color: '#5a7a7a',
              textAlign: 'center',
              fontSize: '1.1rem',
            }}
          >
            No se encontraron libros.
          </p>
        ) : (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'stretch',
              gap: '1.5rem',
            }}
          >
            {filtered.map(book => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}