"use client"
import React from 'react'
import peofile1 from "../../assets/image/profileimg1.png"
import Image from 'next/image'
import Link from 'next/link'
import { Grid } from '@mui/material';



const OurAwards = () => {

    return (
        <div>
            <div>
                <div className="bg-black w-full">
                    <marquee className='text-white overflow-hidden bg-green-400 lg:text-6xl md:text-lg'>
                        <div className='flex items-center'>
                            <Image className='img-scale mx-3' src={peofile1} alt='text' height={40} width={40} />
                            <span className='text-black'>mobile application design</span>
                            <Image className='img-scale mx-3' src={peofile1} alt='text' height={40} width={40} />
                            <span className='text-black'>Web site design & logo</span>
                            <Image className='img-scale mx-3' src={peofile1} alt='text' height={40} width={40} />
                            <span className='text-black'>UI/UX Mobile design</span>
                        </div>
                    </marquee>
                    <div className='w-5/6 mx-auto justify-between flex'>
                        <p className='lg:text-5xl md:test-sm text-white'>Our Awards</p>
                        <Link href=""><span className='lg:text-3xl md:text-xl pt-3 text-green-800'>View My Work</span></Link>

                    </div>
                    <Grid className='w-5/6 mx-auto' container item md={12} lg={12} sm={12}>
                        <Grid container className='lg:pt-4 md:pt-3 md:w-full'>
                            <Grid className='lg:p-5 md:p-2 md:w-full' container item md={12} lg={12} sm={12}>
                                <div className='flex justify-between w-full border-b hover:border-green-500'>
                                    <span className='text-white lg:text-xl md:text-lg w-1/3'>Site Of The Day</span>
                                    <span className='text-white lg:text-xl  md:text-lg w-1/3 text-center'>	Css & Animation</span>
                                    <span className='text-white lg:text-xl md:text-lg w-1/3 text-right'>2018</span>
                                </div>
                            </Grid>
                            <Grid className='lg:p-5 md:p-2 md:w-full' container item md={12} lg={12} sm={12}>
                                <div className='flex justify-between w-full border-b hover:border-green-500'>
                                    <span className='text-white lg:text-xl md:text-lg w-1/3'>Best Business Model	</span>
                                    <span className='text-white lg:text-xl md:text-lg  text-center w-1/3'>	New Strategy</span>
                                    <span className='text-white lg:text-xl md:text-lg text-right w-1/3'>2019</span>
                                </div>
                            </Grid>
                            <Grid className='lg:p-5 md:p-2 md:w-full' container item md={12} lg={12} sm={12}>
                                <div className='flex justify-between w-full border-b hover:border-green-500'>
                                    <span className='text-white lg:text-xl md:text-lg w-1/3'>Motion Graphic	</span>
                                    <span className='text-white lg:text-xl md:text-lg  text-center w-1/3'>	3D & Visual Effect</span>
                                    <span className='text-white lg:text-xl md:text-lg text-right w-1/3'>2020</span>
                                </div>
                            </Grid>
                            <Grid className='lg:p-5 md:p-2 md:w-full' container item md={12} lg={12} sm={12}>
                                <div className='flex justify-between w-full border-b hover:border-green-500'>
                                    <span className='text-white lg:text-xl md:text-lg w-1/3'>Video Design	</span>
                                    <span className='text-white lg:text-xl md:text-lg text-center w-1/3'>	Css & Animation</span>
                                    <span className='text-white lg:text-xl md:text-lg text-right w-1/3'>2018</span>
                                </div>
                            </Grid>
                        </Grid>

                    </Grid>
                </div>

            </div>
        </div>
    )
}

export default OurAwards
