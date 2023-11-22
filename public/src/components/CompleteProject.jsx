import React from 'react'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import work1 from "../../assets/image/project1.png"
import work2 from "../../assets/image/project2.png"
import work3 from "../../assets/image/project3.png"
import work4 from "../../assets/image/project4.png"
import work5 from "../../assets/image/project5.png"
import work6 from "../../assets/image/project6.png"
import CallMadeIcon from '@mui/icons-material/CallMade';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const CompleteProject = () => {
    return (
        <div id='working' className='bg-black pt-12'>
            <div className='bg-black w-5/6 mx-auto'>
                <div className='flex justify-center'>
                    <span className='border h-1 w-24 bg-green-400 m-3'></span>
                    <p className='text-center text-green-400'>Complete Project</p>
                    <span className='border h-1 w-24 bg-green-400 m-3'></span>
                </div>
                <p className='text-white text-center lg:text-5xl md:text-lg'>Look At My Portfolio And Give Me<br /> Your Feedback</p>
                <Grid container className='pt-8' spacing={{ md: 1, lg: 4, xs: 1, sm: 1 }}>
                    <Grid className='cursor-pointer' container item md={6} lg={6} sm={12}>
                        <Image src={work1} alt='text' />
                        <p className='text-green-400 pt-2'>PRODUCT DESIGN</p>
                        <p className='text-white  w-5/6 lg:text-3xl md:text-lg'><strong>Brand Identity & Motion Design</strong></p>
                        <div className='common__icon'>
                            <p className='text-white hover:bg-green-400'><CallMadeIcon /></p>
                        </div>
                    </Grid>
                    <Grid className='cursor-pointer' container item md={6} lg={6} sm={12}>
                        <Image src={work2} alt='text' />
                        <p className='text-green-400  pt-4'>UI/UX DESIGN</p>
                        <p className='text-white  w-5/6 lg:text-3xl md:text-lg pt-4'><strong>Mobile Application Development</strong></p>
                        <div className='common__icon hover:bg-green-400'>
                            <p className='text-white'><CallMadeIcon /></p>
                        </div>
                    </Grid>
                    <Grid className='cursor-pointer' container item md={6} lg={6} sm={12}>
                        <Image src={work3} alt='text' />
                        <p className='text-green-400  pt-4'>PRODUCT DESIGN</p>
                        <p className='text-white  w-5/6 lg:text-3xl md:text-lg pt-4'><strong>Design & Branding Mokeup</strong></p>
                        <div className='common__icon hover:bg-green-400'>
                            <p className='text-white'><CallMadeIcon /></p>
                        </div>
                    </Grid>
                    <Grid className='cursor-pointer' container item md={6} lg={6} sm={12}>
                        <Image src={work4} alt='text' />
                        <p className='text-green-400  pt-4'>UI/UX DESIGN</p>
                        <p className='text-white  w-5/6 lg:text-3xl md:text-lg pt-4'><strong>Mobile Application Development</strong></p>
                        <div className='common__icon hover:bg-green-400'>
                            <p className='text-white '><CallMadeIcon /></p>
                        </div>
                    </Grid>
                    <Grid className='cursor-pointer' container item md={6} lg={6} sm={12}>
                        <Image src={work5} alt='text' />
                        <p className='text-green-400  pt-4'>UI/UX DESIGN</p>
                        <p className='text-white  w-5/6 lg:text-3xl md:text-lg pt-4'><strong>Mobile Application Development</strong></p>
                        <div className='common__icon hover:bg-green-400'>
                            <p className='text-white'><CallMadeIcon /></p>
                        </div>
                    </Grid>
                    <Grid className='cursor-pointer' container item md={6} lg={6} sm={12}>
                        <Image src={work6} alt='text' />
                        <p className='text-green-400  pt-4'>UI/UX DESIGN</p>
                        <p className='text-white w-5/6  lg:text-3xl md:text-sm'><strong>Mobile Application Development</strong></p>
                        <div className='common__icon hover:bg-green-400'>
                            <p className='text-white '><CallMadeIcon /></p>
                        </div>
                    </Grid>
                </Grid>
                <div className='flex justify-center items-center h-64'>
                    <button className='common__icons text-black  py-2 px-4 rounded-full bg-green-400'><ArrowForwardIcon /><br />click more work</button>
                </div>
            </div>
        </div>
    )
}

export default CompleteProject