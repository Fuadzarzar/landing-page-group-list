import ProfileHead from '../components/Profile/ProfileHead'
import AppBody from '../components/BodyApp/AppBody'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Grupos de estudos</title>
      </Head>
      <ProfileHead />
      <AppBody />
    </>
  )
}
