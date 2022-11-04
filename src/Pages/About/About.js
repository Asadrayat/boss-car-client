import React from 'react';
import prsn from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero py-52 bg-base-200 mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={prsn}  alt="" className='rounded-lg w-3/4 h-full shadow-2xl '  />
                    <img src={parts} alt="" className='w-3/5 right-5 top-3/4 border-8 border-white absolute rounded-lg   shadow-2xl ' />
                </div>
                <div className='w-1/2'>
                    <p className='text-3xl font-bold text-red-600'>About Us</p>
                    <h1 className="text-5xl font-bold my-6">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6 text-xl  my-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="py-6  text-xl my-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn btn-active btn-secondary">Get More Info</button>

                </div>
            </div>
        </div>
    );
};

export default About;