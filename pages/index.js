import Head from 'next/head';
import CoverPhotoPopUp from "../components/CoverPhotoPopUp";

const Home = () => {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-[#E5E5E5]'>
      <Head>
        <title>Skilly tree</title>
      </Head>

      <CoverPhotoPopUp />

    </div>
  )
}

export default Home
