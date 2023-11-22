import React from 'react'
import { Grid } from '@mui/material'
import CallMadeIcon from '@mui/icons-material/CallMade'

const Footer = () => {
    return (
        <div className='bg-black pb-6'>
            <div className='bg-black w-5/6 mx-auto'>
                <Grid className='pt-16' container item md={12} lg={12} sm={12}>
                    <Grid container item md={6} lg={6} sm={12}>
                        <p className='text-white lg:text-xl md:text-lg pt-8'>Copyright © 2023 <span className='text-green-400'>Matias.</span> All rights reserved.</p>
                    </Grid>
                    <Grid className='pt-8' container item md={4} lg={4} sm={12}>
                        <p className='text-white'>Terms & Condition Privacy Policy</p>
                    </Grid>
                    <Grid container item md={2} lg={2} sm={12} className='flex lg:justify-end'>
                        <div className='common__icon1 bg-green-400'>
                            <p className='text-white'><CallMadeIcon /></p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
