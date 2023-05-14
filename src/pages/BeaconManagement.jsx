import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumb';
import BeaconTable from '../components/BeaconTable';

//const BeaconController = require('./src/controller/BeaconController.js');

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Beacon Management' />
      <div className='flex flex-col gap-10'>
        <div className='col-span-5 xl:col-span-3'>
          <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='border-b border-stroke py-4 px-7 dark:border-strokedark'>
              <h3 className='font-medium text-black dark:text-white'>
                Add Beacon
              </h3>
            </div>
            <div className='p-7'>
              <form action='#'>
                <div className='mb-5.5 flex flex-col gap-5.5 sm:flex-row'>
                  <div className='w-full sm:w-1/2'>
                    <label
                      className='mb-3 block text-sm font-medium text-black dark:text-white'
                      htmlFor='fullName'
                    >
                      Name
                    </label>
                    <div className='relative'>
                      <input
                        className='w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                        type='text'
                        name='fullName'
                        id='fullName'
                      />
                    </div>
                  </div>

                  <div className='w-full sm:w-1/2'>
                    <label
                      className='mb-3 block text-sm font-medium text-black dark:text-white'
                      htmlFor='phoneNumber'
                    >
                      Loacalization
                    </label>
                    <input
                      className='w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                      type='text'
                      name='localization'
                      id='localization'
                    />
                  </div>
                </div>
                <div className='flex justify-end gap-4.5'>
                  <button
                    className='flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1'
                    type='submit'
                   // onclick='BeaconController.addBeacon()'
                  >
                    Add Beacon
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <BeaconTable />
      </div>
    </DefaultLayout>
  )
}

export default Tables;
