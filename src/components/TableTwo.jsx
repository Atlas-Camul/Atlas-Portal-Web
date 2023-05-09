import React from 'react';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const TableTwo = () => {

  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  return (
    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='py-6 px-4 md:px-6 xl:px-7.5'>
        <div className='relative z-20 inline-block'>
          <select
            name='#'
            id='#'
            className='relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-xl font-semibold text-black dark:text-white outline-none'
          >
            <option className='dark:text-black' value=''>Feedback</option>
            <option className='dark:text-black' value=''>Other things</option>
          </select>
          <span className='absolute top-1/2 right-3 z-10 -translate-y-1/2'>
            <svg
              width='10'
              height='6'
              viewBox='0 0 10 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z'
                fill='#637381'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z'
                fill='#637381'
              />
            </svg>
          </span>
        </div>
      </div>

      <div className='grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5'>
        <div className='col-span-1 flex items-center'>
          <p className='font-medium'>ID</p>
        </div>
        <div className='col-span-2 hidden items-center sm:flex'>
          <p className='font-medium'>Title</p>
        </div>
        <div className='col-span-2 flex items-center'>
          <p className='font-medium'>Message</p>
        </div>
        {/* <div className='col-span-1 flex items-center'>
          <p className='font-medium'>Sold</p>
        </div>
        <div className='col-span-1 flex items-center'>
          <p className='font-medium'>Profit</p>
        </div> */}
      </div>

      <div className='grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5'>
        <div className='col-span-1 flex items-center'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
            {/* <div className='h-12.5 w-15 rounded-md'>
              <img src={ProductOne} alt='Product' />
            </div> */}
            <p className='text-sm text-black dark:text-white'>
              #0001
            </p>
          </div>
        </div>
        <div className='col-span-2 hidden items-center sm:flex'>
          <p className='text-sm text-black dark:text-white'>Nice Design</p>
        </div>
        <div className='col-span-3 flex items-center'>
          <p className='text-sm text-black dark:text-white'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)} className='col-end-9 flex justify-end items-center'>
          <p className='text-sm text-meta-3'>See attachemnts</p>
        </button>
        {/* <div className='col-span-1 flex items-center'>
          <p className='text-sm text-black dark:text-white'>22</p>
        </div>
        <div className='col-span-1 flex items-center'>
          <p className='text-sm text-meta-3'>$45</p>
        </div> */}
      </div>
      <div className='grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5'>
        <div className='col-span-1 flex items-center'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
            <p className='text-sm text-black dark:text-white'>#0002</p>
          </div>
        </div>
        <div className='col-span-2 hidden items-center sm:flex'>
          <p className='text-sm text-black dark:text-white'>Really well thought out</p>
        </div>
        <div className='col-span-3 flex items-center'>
          <p className='text-sm text-black dark:text-white'>In porta, orci eu pellentesque condimentum, ante diam feugiat enim, nec rutrum nibh lacus non lorem. Nam a turpis dolor. Orci varius natoque penatibus et magnis dis parturient montes.</p>
        </div>
      </div>
      <div className='grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5'>
        <div className='col-span-1 flex items-center'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
            <p className='text-sm text-black dark:text-white'>
              #0003
            </p>
          </div>
        </div>
        <div className='col-span-2 hidden items-center sm:flex'>
          <p className='text-sm text-black dark:text-white'>Very helpful app, thank you!</p>
        </div>
        <div className='col-span-3 flex items-center'>
          <p className='text-sm text-black dark:text-white'>Quisque eu tempor eros. Sed nec ornare urna.</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)} className='col-end-9 flex justify-end items-center'>
          <p className='text-sm text-meta-3'>See attachemnts</p>
        </button>
      </div>
      <div className='grid grid-cols-4 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5'>
        <div className='col-span-1 flex items-center'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
            <p className='text-sm text-black dark:text-white'>#0004</p>
          </div>
        </div>
        <div className='col-span-2 hidden items-center sm:flex'>
          <p className='text-sm text-black dark:text-white'>Keep it going!</p>
        </div>
        <div className='col-span-3 flex items-center'>
          <p className='text-sm text-black dark:text-white'>Nam ligula est, hendrerit vitae sem ut, feugiat suscipit purus. Phasellus eget ligula ut augue dignissim varius non ut arcu. Nulla facilisi. Nunc in facilisis orci.</p>
        </div>
      </div>


      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto drop-shadow-2xl">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          This is a example fo the attachements
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            You will be able to see photos and other texts here
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className='flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1'
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div >
  )
}

export default TableTwo;
