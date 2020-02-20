import Link from 'next/link'

export default function Index(){
  return (
    <>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <p>Hello Next.js</p>
    </>
  )
}
