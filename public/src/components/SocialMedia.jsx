import React from 'react'
import { Grid } from '@mui/material'
import Link from 'next/link'
import Instagram from '@mui/icons-material/Instagram'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Facebook from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

const SocialMedia = () => {
    return (
        <div className='bg-black'>
            <div className='bg-black w-5/6 mx-auto pb-8'>
                <p className='text-white lg:text-6xl md:text-4xl border border-gray-600 text-center rounded'><strong>GET IN TOUCH</strong></p>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={6} lg={6} sm={12}>
                        <p className='text-white lg:text-2xl md:text-lg pt-10'>Hello, I’m David Matias, Website & User Interface Designer based in London.</p>
                        <div className='pt-10'>
                            <Link href='mailto:Davidmatias333@Gmail.Com' className='text-white lg:text-3xl md:text-lg'>Davidmatias333@Gmail.Com</Link>
                        </div>
                    </Grid>
                    <Grid item md={6} lg={6} sm={12}>
                        <Grid className='pt-16' container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                            <Grid item md={6} lg={6} sm={12}>
                                <div className='border border-gray-600 p-5 rounded w-full hover:bg-green-400 '>
                                    <Link href="https://www.facebook.com/" className='text-white flex items-center hover:text-black'>
                                        <Facebook className='mx-2' /> Facebook
                                        <ArrowRightAltIcon className='ml-auto' />
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item md={6} lg={6} sm={12}>
                                <div className='border border-gray-600 p-5 rounded w-full hover:bg-green-400 '>
                                    <Link href="https://www.instagram.com/" className='text-white flex items-center hover:text-black'>
                                        <Instagram className='mx-2' /> Instagram
                                        <ArrowRightAltIcon className='ml-auto' />
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item md={6} lg={6} sm={12}>
                                <div className='border border-gray-600 p-5 rounded w-full hover:bg-green-400'>
                                    <Link href="https://dribbble.com/" className='text-white flex items-center  hover:text-black'>
                                        <LanguageIcon className='mx-2' /> Dribble
                                        <ArrowRightAltIcon className='ml-auto' />
                                    </Link>
                                </div>
                            </Grid>
                            <Grid item md={6} lg={6} sm={12}>
                                <div className='border border-gray-600 p-5 rounded w-full hover:bg-green-400'>
                                    <Link href="https://your-workflow-link.com" className='text-white flex items-center  hover:text-black'>
                                        <WorkspacesIcon className='mx-2' /> Workflow
                                        <ArrowRightAltIcon className='ml-auto' />
                                    </Link>
                                </div>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </div>
        </div>
    )
}

export default SocialMedia
