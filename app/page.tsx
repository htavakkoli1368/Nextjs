import Link from 'next/link'
import ProductCard from './Components/ProductCard'

export default function Home() {
  return (
    <main >
      <h1>Hello world</h1>
      <Link href='/users'> list of users</Link>
      <Link href='/api/auth/signin'> login</Link>
      <ProductCard />
      </main>
  )
}
