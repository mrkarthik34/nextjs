"use client"
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import homeimg from "../public/assets/image/profileimg.png"
import { TypeAnimation } from 'react-type-animation';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Profile from '@/public/src/components/Profile';
import OurAwards from '@/public/src/components/OurAwards';
import CompleteProject from '@/public/src/components/CompleteProject';
import Project from '@/public/src/components/Project';
import ServicesPage from '@/public/src/components/ServicesPage';
import Working from '@/public/src/components/Working';
import SocialMedia from '@/public/src/components/SocialMedia';

export default function Home() {
  return (
    <>
      <div className='banners'>
        <div className='mx-auto w-5/6 py-24'>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <p className='text-white text-2xl'>Currently Available ForFreelance<br /> Worldwide</p>
              <div className='border h-0.5 w-5/12'></div>
              <p className='xl:text-6xl md:text-4xl text-white'>Creative Visual</p>
              <TypeAnimation
                className='xl:text-6xl md:text-3xl text-yellow-600'
                preRenderFirstString={true}
                sequence={[
                  500,
                  'I am Designer',
                  1000,
                  'I am Developer',
                  500,
                ]}
                speed={50}
                repeat={Infinity}
              />
              <div class='container items-center pt-4'>
                <span class='pulse-button'> <PlayCircleIcon /></span>
              </div>
              <p className='text-white md:text-2xl lg:text-4xl pt-8'>Work Process</p>
            </Grid>
            <Grid item xs={6} md={6}>
              <Image height={400} width={400} src={homeimg} alt='' />
            </Grid>
          </Grid>
        </div>
      </div>
      <Profile />
      <OurAwards />
      <CompleteProject/>
      <Project />
      <ServicesPage/>
      <Working/>
      <SocialMedia/>
    </>


  )
}
