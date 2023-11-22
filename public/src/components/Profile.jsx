"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import peofile1 from "../../assets/image/profileimg1.png"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid } from '@mui/material';
import profiles from "../../assets/image/profileimg3.png";
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import skil from "../../assets/image/boot.png";
import skil1 from "../../assets/image/javascript.png";
import skil2 from "../../assets/image/figma.png";
import skil3 from "../../assets/image/wordpress.png";
import CallMadeIcon from '@mui/icons-material/CallMade'



const Profile = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div id='profile' className='bg-black w-100'>
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
            <div className='w-5/6 mx-auto bg-black pt-8'>
                <div>
                    <Image className='mx-auto' src={peofile1} alt='text' height={50} width={50} />
                    <p className='text-white text-center lg:text-3xl md:text-xl pt-5'>I'm David Matias, I'm a Brand & Webflow Designer, Currently residing in the lush Victoria Street London, Matias operates globally and is ready to take on any design challenge.</p>
                    <div className='mx-auto items-center'>
                        <TabContext value={value}>
                            <Box className='overflow'>
                                {/* <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab className='common__icon1'
                                                sx={{
                                                    '&.Mui-selected': {
                                                        color: 'black',
                                                        backgroundColor: 'yellow',
                                                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                                    },

                                                }}
                                                label="ABOUT"
                                                value="1"
                                            />
                                            <Tab
                                                sx={{
                                                    color: 'white',
                                                    backgroundColor: 'black',
                                                    '&.Mui-selected': {
                                                        color: 'black',
                                                        backgroundColor: 'yellow',
                                                    },
                                                }}
                                                label="EXPREIENCE"
                                                value="2"
                                            />
                                            <Tab
                                                sx={{
                                                    color: 'white',
                                                    backgroundColor: 'black',
                                                    '&.Mui-selected': {
                                                        color: 'black',
                                                        backgroundColor: 'yellow',
                                                    },
                                                }}
                                                label="EDUCATION"
                                                value="3"
                                            />
                                            <Tab
                                                sx={{
                                                    color: 'white',
                                                    backgroundColor: 'black',
                                                    '&.Mui-selected': {
                                                        color: 'black',
                                                        backgroundColor: 'yellow',
                                                    },
                                                }}
                                                label="SKILS"
                                                value="4"
                                            />


                                        </TabList>
                                    </Grid>

                                </Grid> */}
                                <Grid className='pt-16 lg:w-3/5 md:w-5/6 mx-auto md:pt-8' container item md={12} lg={12} sm={12}>
                                    <Grid container item md={3} xl={3} lg={3} sm={6} xs={6}>
                                        <TabList className='rounded bg-gray-600 md:mt-5 md:mx-2 border-none' onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab
                                                sx={{
                                                    color: 'white',
                                                    '&.Mui-selected': {
                                                        color: 'black',
                                                        backgroundColor: 'yellow',
                                                    },
                                                }}
                                                label="EXPREIENCE"
                                                value="1"
                                            />
                                        </TabList>
                                    </Grid>
                                    <Grid container item md={3} xl={3} lg={3} sm={6} xs={6}>
                                        <TabList className='rounded bg-gray-600 md:mt-5 md:mx-2 border-none' onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab
                                                sx={{
                                                    color: 'white',
                                                    '&.Mui-selected': {
                                                        color: 'black',
                                                        backgroundColor: 'yellow',
                                                    },
                                                }}
                                                label="EXPREIENCE"
                                                value="2"
                                            />
                                        </TabList>
                                    </Grid>
                                    <Grid container item md={3} xl={3} lg={3} sm={6} xs={6}>
                                        <TabList className='rounded bg-gray-600 md:mt-5 md:mx-2 border-none' onChange={handleChange} aria-label="lab API tabs example">
                                            <Tab
                                                sx={{
                                                    color: 'white',
                                                    '&.Mui-selected': {
                                                        color: 'black',
                                                        backgroundColor: 'yellow',
                                                    },
                                                }}
                                                label="EDUCATION"
                                                value="3"
                                            />
                                        </TabList>
                                    </Grid>
                                    <Grid container item md={3} lg={3} xl={3} xs={6}  sm={6} className='flex lg:justify-end xs:mt-3'>
                                       
                                            <TabList className='rounded bg-gray-600 md:mt-5 md:mx-5 border-none' onChange={handleChange} aria-label="lab API tabs example">
                                                <Tab
                                                    sx={{
                                                        color: 'white',
                                                        '&.Mui-selected': {
                                                            color: 'black',
                                                            backgroundColor: 'yellow',
                                                        },
                                                    }}
                                                    label="SKILS"
                                                    value="4"
                                                />
                                            </TabList>

                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid container item md={6} lg={6} sm={12}>
                                        <TabPanel className='text-white' value="1">
                                            <Image src={profiles} alt='text' />
                                        </TabPanel>
                                    </Grid>
                                    <Grid container item md={6} lg={6} sm={12}>
                                        <TabPanel className='text-white' value="1">
                                            <p className='text-white lg:text-4xl md:text-4xl sm:text-3xl'>Personal Info</p>
                                            <p className='md:text-lg'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil</p>
                                            <Grid container>
                                                <Grid className='p-5' container item md={6} lg={6} sm={12}>
                                                    <div className='profile_containe p-3'>
                                                        <p className='text-lg'>email</p>
                                                        <Link href="mailto:Matias999@Gmail.Com">Matias999@Gmail.Com</Link>
                                                    </div>
                                                </Grid>
                                                <Grid className='p-5' container item md={6} lg={6} sm={12}>
                                                    <div className='profile_containe p-3'>
                                                        <p className='text-lg'>Phone</p>
                                                        <Link href="tel:+2871382023">+(2) 871 382 023</Link>
                                                    </div>
                                                </Grid>
                                                <Grid className='p-5' container item md={6} lg={6} sm={12}>
                                                    <div className='profile_containe p-3'>
                                                        <p className='text-lg'>Phone</p>
                                                        <Link href="">Victoria Street London,</Link>
                                                    </div>
                                                </Grid>
                                                <Grid className='p-5' container item md={6} lg={6} sm={12}>
                                                    <div className='profile_containe p-3'>
                                                        <p className='text-lg'>Follow</p>
                                                        <Link href="https://www.facebook.com/your-facebook-url"><FacebookIcon /></Link>
                                                        <Link href="https://www.twitter.com/your-twitter-url"><TwitterIcon /></Link>
                                                        <Link href="https://www.linkedin.com/in/your-linkedin-url"><LinkedInIcon /></Link>
                                                        <Link href="https://www.instagram.com/your-instagram-url"><InstagramIcon /></Link>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </TabPanel>

                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid container item md={6} lg={6} sm={12}>
                                        <TabPanel className='text-white' value="2">
                                            <Image src={profiles} alt='text' />
                                        </TabPanel>
                                    </Grid>
                                    <Grid container item md={6} lg={6} sm={12}>
                                        <TabPanel className='text-white' value="2">
                                            <p className='text-white lg:text-3xl md:text-lg'>My Experience</p>
                                            <p className='md:text-lg pt-3'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil</p>
                                            <Grid container className='lg:pt-4 md:pt-3 md:w-full'>
                                                <Grid className='lg:p-5 md:p-2 md:w-full' container item md={12} lg={12} sm={12}>
                                                    <div className='flex justify-between w-full border-b hover:border-green-500'>
                                                        <span className='text-start text-green-500 lg:text-2xl md:text-lg'>in 2011</span>
                                                        <span className='text-white lg:text-xl md:text-lg'><strong>Software Engineer </strong><br />I Head & Manager</span>
                                                    </div>
                                                </Grid>
                                                <Grid className='lg:p-5 md:p-2 md:w-full' container item md={12} lg={12} sm={12}>
                                                    <div className='flex justify-between w-full border-b hover:border-green-500'>
                                                        <span className='text-start text-green-500 lg:text-2xl md:text-lg'>in 2016</span>
                                                        <span className='text-white lg:text-xl md:text-lg'><strong>Product Designer</strong><br />Head of Department</span>
                                                    </div>
                                                </Grid>
                                                <Grid className='lg:p-5 md:p-2 md:w-full' container item md={12} lg={12} sm={12}>
                                                    <div className='flex justify-between w-full border-b hover:border-green-500'>
                                                        <span className='text-start text-green-500 lg:text-2xl md:text-lg'>in 2023</span>
                                                        <span className='text-white lg:text-xl md:text-lg'><strong>Senior UI Designer</strong><br />Fiverr.com</span>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </TabPanel>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid container item md={6} lg={6} sm={12}>
                                        <TabPanel className='text-white' value="3">
                                            <Image src={profiles} alt='text' />
                                        </TabPanel>
                                    </Grid>
                                    <Grid container item md={6} lg={6} sm={12}>
                                        <TabPanel className='text-white' value="3">
                                            <p className='text-white lg:text-3xl md:text-lg'>My Education</p>
                                            <p className='md:text-lg pt-3'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil</p>
                                            <Grid container className='lg:pt-4 md:pt-3 md:w-full'>
                                                <Grid className='lg:p-5 md:p-2 md:w-full' container item md={12} lg={12} sm={12}>
                                                    <div className='flex justify-between w-full border-b hover:border-green-500'>
                                                        <span className='text-start text-green-500 lg:text-2xl md:text-lg'>2011-2013</span>
                                                        <span className='text-white lg:text-xl md:text-lg'><strong>Programming Course</strong><br />New York University</span>
                                                    </div>
                                                </Grid>
                                                <Grid className='lg:p-5 md:p-2 md:w-full' container item md={12} lg={12} sm={12}>
                                                    <div className='flex justify-between w-full border-b hover:border-green-500'>
                                                        <span className='text-start text-green-500 lg:text-2xl md:text-lg'>2013-2016</span>
                                                        <span className='text-white lg:text-xl md:text-lg'><strong>University Of Design</strong><br />Kingston, United States</span>
                                                    </div>
                                                </Grid>
                                                <Grid className='lg:p-5 md:p-2 md:w-full' container item md={12} lg={12} sm={12}>
                                                    <div className='flex justify-between w-full border-b hover:border-green-500'>
                                                        <span className='text-start text-green-500 lg:text-2xl md:text-lg'>2016-2018</span>
                                                        <span className='text-white lg:text-xl md:text-lg'><strong>Web Design Course</strong><br />New York University</span>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </TabPanel>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid container item md={6} lg={6} sm={12}>
                                        <TabPanel className='text-white' value="4">
                                            <Image src={profiles} alt='text' />
                                        </TabPanel>
                                    </Grid>
                                    <Grid container item md={6} lg={6} sm={12}>
                                        <TabPanel className='text-white' value="4">
                                            <p className='text-white lg:text-3xl md:text-lg'>My Skils</p>
                                            <p className='md:text-lg pt-3'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil</p>
                                            <Grid container>
                                                <Grid className='p-5  md:w-full' container item xl={6} md={6} lg={6} sm={12}>
                                                    <div className='profile_containe flex p-3 sm:p-3'>
                                                        <Image src={skil} alt='' />
                                                        <span className='lg:p-3 md:p-2'>Bootstrap<br /><strong>90%</strong></span>
                                                    </div>
                                                </Grid>
                                                <Grid className='p-5' container item xl={6} md={6} lg={6} sm={12}>
                                                    <div className='profile_containe flex p-3 sm:p-3'>
                                                        <Image src={skil1} alt='' />
                                                        <span className='lg:p-3 md:p-2'>Figma<br /><strong>90%</strong></span>
                                                    </div>
                                                </Grid>
                                                <Grid className='p-5' container item xl={6} md={6} lg={6} sm={12}>
                                                    <div className='profile_containe flex p-3 sm:p-3'>
                                                        <Image src={skil2} alt='' />
                                                        <span className='lg:p-3 md:p-2'>Figma<br /><strong>90%</strong></span>
                                                    </div>
                                                </Grid>
                                                <Grid className='p-5' container item xl={6} md={6} lg={6} sm={12}>
                                                    <div className='profile_containe flex p-3 sm:p-3'>
                                                        <Image src={skil3} alt='' />
                                                        <span className='lg:p-3 md:p-2'>wordpress<br /><strong>90%</strong></span>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </TabPanel>
                                    </Grid>
                                </Grid>
                            </Box>
                        </TabContext>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Profile