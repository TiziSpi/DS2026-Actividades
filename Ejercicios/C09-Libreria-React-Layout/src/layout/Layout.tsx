import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />

      <div style={{ flex: 1 }}>
        {children}
      </div>

      <Footer />
    </div>
  )
}