import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div>
        <h1 className='text-3xl'>Hi, I&apos;m <Link className='text-blue-500 hover:text-purple-500 duration-300' href='https://discord.com/users/1412021770638200832' target='_blank'>Skriro</Link></h1>
        <p className='text-xl'>Software Engineer</p>
      </div>
    </div>
  )
}