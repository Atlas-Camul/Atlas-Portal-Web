import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumb';
import TableThree from '../components/TableThree';

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='User Management' />
      <div className='flex flex-col gap-10'>
        <TableThree />
      </div>
    </DefaultLayout>
  )
}

export default Tables;
