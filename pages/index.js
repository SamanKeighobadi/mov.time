import Head from 'next/head'
import MovieContainer from '../components/MovieContainer/MovieContainer'
import Sidebar from '../components/Sidebar'
import UserSidebar from '../components/userSidebar/UserSidebar'

export default function Home() {
  return (
    <div className="flex flex-col p-0 m-0 min-h-screen py-2">
      <Head>
        <title>Mov.time</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-flow-col'>
      <Sidebar />
      <MovieContainer />
      <UserSidebar />







      </div>
    </div>
  )
}
        