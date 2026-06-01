import { useState } from 'react'

interface Props {
  title: string
  author: string
  cover: string
  price: number
}

export default function BookCard({ title, author, cover, price }: Props) {
  const [liked, setLiked] = useState(false)

  return (
    <div
      style={{
        width: '220px',
        minHeight: '470px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f0f7f7',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid #b2cece',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
    >
      <img
        src={cover}
        alt={title}
        style={{
          width: '100%',
          height: '320px',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
        }}
      />

      <div
        style={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        <p
          style={{
            fontWeight: 700,
            fontSize: '1rem',
            marginBottom: '0.2rem',
            color: '#2b3a2b',
            minHeight: '48px',
          }}
        >
          {title}
        </p>

        <p
          style={{
            color: '#5a7a7a',
            fontSize: '0.9rem',
            marginBottom: '0.5rem',
          }}
        >
          {author}
        </p>

        <p
          style={{
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#3a6060',
            fontSize: '1rem',
          }}
        >
          ${price.toLocaleString('es-AR')}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'auto',
          }}
        >
          <button
            style={{
              backgroundColor: '#7a9e9f',
              color: '#fff',
              border: 'none',
              padding: '0.45rem 0.9rem',
              borderRadius: '6px',
              fontSize: '0.9rem',
              fontFamily: 'Cormorant, serif',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            + Carrito
          </button>

          <button
            onClick={() => setLiked(!liked)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.2rem',
              cursor: 'pointer',
            }}
          >
            {liked ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  )
}