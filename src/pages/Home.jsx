import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumb';

const Calendar = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Map Overview' />

      {/* <!-- ====== Calendar Section Start ====== --> */}
      <div className='w-full h-[700px] bg-cover bg-center bg-map-mockup rounded-sm border border-stroke shadow-default dark:border-strokedark'
      >
      </div>
      {/* <!-- ====== Calendar Section End ====== --> */}
    </DefaultLayout>
  )
}

export default Calendar;
