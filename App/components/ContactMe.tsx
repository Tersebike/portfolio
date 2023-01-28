import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {}

function ContactMe({}: Props) {
  const { register, handleSubmit, } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:williamstim146?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl pl-[20px]'>Contact</h3>
      <div className='flex flex-col space-y-2 mb-10 md:mb-0 md:mt-16'>
        <h4 className='text-2xl font-semibold text-center'>
          I have got just what you need.{' '}
          <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
        </h4>

        <div className='space-y-1 md:space-y-4'>
          <div className='flex items-center space-x-2 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
            <p className='text-lg'>602-743-2733</p>
          </div>

          <div className='flex items-center space-x-2 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
            <p className='text-lg'>email me</p>
          </div>

          <div className='flex items-center space-x-2 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
            <p className='text-lg'>Dallas TX</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' type='text' className='contactInput w-36 h-10 md:h-18 md:w-52' />
            <input {...register('email')} placeholder='Email' type='email' className='contactInput w-36 h-10 md:h-18 md:w-52' />
          </div>

          <input {...register('subject')} placeholder='Subject' type='text' className='contactInput h-10 md:h-18' />

          <textarea {...register('message')} placeholder='Message' className='contactInput h-14 md:h-20' />
          <button type='submit' className='bg-[#F7AB0A] py-auto h-8 md:h-14 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactMe