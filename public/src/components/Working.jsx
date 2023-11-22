import React from 'react'
import { Grid } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Working = () => {
    return (
        <div  className='bg-black pt-24'>
            <div className='w-5/6 mx-auto bg-black'>
                <div className='flex justify-center'>
                    <span className='border h-1 w-24 bg-green-400 m-3'></span>
                    <p className='text-center text-green-400'>Working Process</p>
                    <span className='border h-1 w-24 bg-green-400 m-3'></span>
                </div>
                <p className='text-white lg:text-5xl md:text-lg pt-5 text-center'>Your Dream Website In Just Few<br /> Steps</p>
                <Grid container className='pt-16 pb-16' rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid container item md={4} lg={4} sm={12}>
                        <div className='parent-card w-full border border-gray-500  hover:border-green-600 rounded-md p-3'>
                            <p><strong className='text-white lg:text-2xl md:text-lg'>Concept</strong></p>
                            <p className='text-white pt-2'>Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit</p>
                            <p className='text-white pt-2'><FiberManualRecordIcon className='text-green-400' /> Reviewing any existing branding</p>
                            <p className='text-white pt-2'><FiberManualRecordIcon className='text-green-400' /> Target audience and competitors research</p>
                            <p className='text-white pt-2'><FiberManualRecordIcon className='text-green-400' /> Developing a strategy</p>
                        </div>
                    </Grid>
                    <Grid container item md={4} lg={4} sm={12}>
                        <div className='parent-card w-full border border-gray-500  hover:border-green-600 rounded-md p-3'>
                            <p><strong className='text-white lg:text-2xl md:text-lg'>Design</strong></p>
                            <p className='text-white pt-2'>Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit</p>
                            <p className='text-white pt-2'><FiberManualRecordIcon className='text-green-400' /> Developing wireframes and mockup</p>
                            <p className='text-white pt-2'><FiberManualRecordIcon className='text-green-400' /> Choosing typography, color palettes,</p>
                            <p className='text-white pt-2'><FiberManualRecordIcon className='text-green-400' />Refining the design</p>
                        </div>
                    </Grid>
                    <Grid container item md={4} lg={4} sm={12}>
                        <div className='parent-card w-full border border-gray-500  hover:border-green-600 rounded-md p-3'>
                            <p><strong className='text-white lg:text-2xl md:text-lg'>Webflow</strong></p>
                            <p className='text-white pt-2'>Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit</p>
                            <p className='text-white pt-2'><FiberManualRecordIcon className='text-green-400' /> Testing the website thoroughly launch</p>
                            <p className='text-white pt-2'><FiberManualRecordIcon className='text-green-400' /> Choosing typography, color palettes,</p>
                            <p className='text-white pt-2'><FiberManualRecordIcon className='text-green-400' /> Refining the design</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Working
