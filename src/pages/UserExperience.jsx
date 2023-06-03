import React, { useState, useEffect  } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumb';
import TableTwo from '../components/TableTwo';

const Tables = () => {
        const [jsonData, setJsonData] = useState([]);
    //List All Users
    useEffect(() => {
        fetch('/user-experience/list')
            .then(res => res.json())
            .then(data => {
                if ('status' in data) {
                    return;
                }

                if (Array.isArray(data)) {
                    setJsonData(data);
                } else {
                    setJsonData([data]);
                }
               
            });
    }, []);






  return (
    <DefaultLayout>
      <Breadcrumb pageName='User Experience' />
      <div className='flex flex-col gap-10'>
        <TableTwo jsonData = {jsonData} />
      </div>
    </DefaultLayout>
  )
}

export default Tables;
