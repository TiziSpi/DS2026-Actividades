interface Props {
  query: string
  setQuery: (q: string) => void
}

export default function Navbar({ query, setQuery }: Props) {
  return (
    <nav
      style={{
        backgroundColor: '#f4c2c2',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        boxShadow: '0 2px 8px rgba(216, 167, 177, 0.2)',
      }}
    >
      <span
        style={{
          fontSize: '1.4rem',
          fontWeight: 700,
          color: '#6d4c5b',
          letterSpacing: '0.05em',
        }}
      >
         📚 Mi Librería
      </span>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fdecef',
          border: '1px solid #e7c8cf',
          borderRadius: '12px',
          padding: '0.6rem 1rem',
          flex: 1,
          maxWidth: '420px',
        }}
      >
        <span
          style={{
            marginRight: '0.5rem',
            color: '#b76e79',
          }}
        >
          🔍
        </span>

        <input
          type="text"
          placeholder="Buscar por título o autor..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            border: 'none',
            background: 'none',
            outline: 'none',
            width: '100%',
            fontSize: '1rem',
            color: '#6d4c5b',
            fontFamily: 'Cormorant, serif',
          }}
        />
      </div>
    </nav>
  )
}