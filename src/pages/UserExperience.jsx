import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumb';
import TableTwo from '../components/TableTwo';

const Tables = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='User Experience' />
      <div className='flex flex-col gap-10'>
        <TableTwo />
      </div>
    </DefaultLayout>
  )
}

export default Tables;
