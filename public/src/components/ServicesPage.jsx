import React from 'react'
import { Grid } from '@mui/material'
import CallMadeIcon from '@mui/icons-material/CallMade';

const ServicesPage = () => {
    return (
        <div id='services' className='bg-black'>
            <div className='bg-black w-5/6 mx-auto'>
                <div className='flex justify-center'>
                    <span className='border h-1 w-24 bg-green-400 m-3'></span>
                    <p className='text-center text-green-400'>Services That i Provide</p>
                    <span className='border h-1 w-24 bg-green-400 m-3'></span>
                </div>
                <p className='text-white lg:text-5xl md:text-lg pt-5 text-center'>My Special Service For Your<br /> Business Development</p>
                <div className='border-b hover:border-green-500 pb-3'>
                    <Grid className='pt-16' container item md={12} lg={12} sm={12}>
                        <Grid container item md={2} lg={2} sm={12}>
                            <p className='text-white lg:text-xl md:text-lg pt-8'>01</p>
                        </Grid>
                        <Grid container item md={4} lg={4} sm={12}>
                            <p className='text-white lg:text-2xl md:text-lg'>Designer<br /><strong className='hover:text-green-400'>Illustration Design</strong></p>
                        </Grid>
                        <Grid container item md={4} lg={4} sm={12}>
                            <p className='text-white'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit</p>
                        </Grid>
                        <Grid container item md={2} lg={2} sm={12} className='flex lg:justify-end'>
                            <div className='common__icon hover:bg-green-400'>
                                <p className='text-white'><CallMadeIcon /></p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='border-b hover:border-green-500 pb-3'>
                    <Grid className='pt-16' container item md={12} lg={12} sm={12}>
                        <Grid container item md={2} lg={2} sm={12}>
                            <p className='text-white lg:text-xl md:text-lg pt-8'>02</p>
                        </Grid>
                        <Grid container item md={4} lg={4} sm={12}>
                            <p className='text-white lg:text-2xl md:text-lg'>Branding<br /><strong className='hover:text-green-400'>Business Branding</strong></p>
                        </Grid>
                        <Grid container item md={4} lg={4} sm={12}>
                            <p className='text-white'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit</p>
                        </Grid>
                        <Grid container item md={2} lg={2} sm={12} className='flex lg:justify-end'>
                            <div className='common__icon hover:bg-green-400'>
                                <p className='text-white'><CallMadeIcon /></p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='border-b hover:border-green-500 pb-3'>
                    <Grid className='pt-16' container item md={12} lg={12} sm={12}>
                        <Grid container item md={2} lg={2} sm={12}>
                            <p className='text-white lg:text-xl md:text-lg pt-8'>03</p>
                        </Grid>
                        <Grid container item md={4} lg={4} sm={12}>
                            <p className='text-white lg:text-2xl md:text-lg'>UI/UX Design<br /><strong className='hover:text-green-400'>Web UI/UX Design</strong></p>
                        </Grid>
                        <Grid container item md={4} lg={4} sm={12}>
                            <p className='text-white'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit</p>
                        </Grid>
                        <Grid container item md={2} lg={2} sm={12} className='flex lg:justify-end'>
                            <div className='common__icon hover:bg-green-400'>
                                <p className='text-white'><CallMadeIcon /></p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='border-b hover:border-green-500 pb-3'>
                    <Grid className='pt-16' container item md={12} lg={12} sm={12}>
                        <Grid container item md={2} lg={2} sm={12}>
                            <p className='text-white lg:text-xl md:text-lg pt-8'>04</p>
                        </Grid>
                        <Grid container item md={4} lg={4} sm={12}>
                            <p className='text-white lg:text-2xl md:text-lg'>Web Design<br /><strong className='hover:text-green-400'>Application Design</strong></p>
                        </Grid>
                        <Grid container item md={4} lg={4} sm={12}>
                            <p className='text-white'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit</p>
                        </Grid>
                        <Grid container item md={2} lg={2} sm={12} className='flex lg:justify-end'>
                            <div className='common__icon hover:bg-green-400'>
                                <p className='text-white'><CallMadeIcon /></p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className='border-b hover:border-green-500 pb-3'>
                    <Grid className='pt-16' container item md={12} lg={12} sm={12}>
                        <Grid container item md={2} lg={2} sm={12}>
                            <p className='text-white lg:text-xl md:text-lg pt-5'>05</p>
                        </Grid>
                        <Grid container item md={4} lg={4} sm={12}>
                            <p className='text-white lg:text-2xl md:text-lg'>SEO Analytics<br /><strong className='hover:text-green-400'>Digital Marketing</strong></p>
                        </Grid>
                        <Grid container item md={4} lg={4} sm={12}>
                            <p className='text-white'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sunt in culpa qui officia deserunt mollit</p>
                        </Grid>
                        <Grid container item md={2} lg={2} sm={12} className='flex lg:justify-end'>
                            <div className='common__icon hover:bg-green-400'>
                                <p className='text-white'><CallMadeIcon /></p>
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div>
    )
}

export default ServicesPage
