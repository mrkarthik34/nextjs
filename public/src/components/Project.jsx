import React from 'react'
import { Grid } from '@mui/material'
import Image from 'next/image'
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import project_img from "../../assets/image/project11.png"

const Project = () => {
    return (
        <div className='bg-black'>
            <div className='bg-black w-5/6 mx-auto'>

                <Grid container>
                    <Grid itemcontainer item md={6} lg={6} sm={12} className='pt-24'>

                        <div className='w-5/6 border-b hover:border-green-500 pt-12'>
                            <div className='flex'>
                                <span className='border h-1 w-20 bg-green-400 m-3'></span>
                                <p className='text-center text-green-400'>Need a Project?</p>
                            </div>
                            <p className='text-white lg:text-5xl md:text-lg pt-5'>Let's Work Together. <br />Fixed A Meeting</p>
                        </div>
                        <div className='w-5/6 border-b hover:border-green-500 pt-3 pb-3'>
                            <div className='flex pt-5'>
                                <div className='py-3 px-2 rounded-full bg-green-400'>
                                    <EmailIcon />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-white px-4'>Email </p>
                                    <p className='text-white px-4'><strong>Davidmatias333@Gmail.Com</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className='w-5/6 border-b hover:border-green-500 pt-3 pb-3'>
                            <div className='flex pt-5'>
                                <div className='py-3 px-2 rounded-full bg-green-400'>
                                    <LocationOnIcon />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-white px-4'>Location </p>
                                    <p className='text-white px-4'><strong>Victoria Street London, England</strong></p>
                                </div>
                            </div>
                        </div>

                    </Grid>
                    <Grid container item md={6} lg={6} sm={12}>
                            <Image className='lg:pb-10 md:pt-8' src={project_img} alt='text' />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Project
