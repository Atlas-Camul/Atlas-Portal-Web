import React, { useEffect, useState } from 'react';
import BeaconTable from '../components/BeaconTable';
import Breadcrumb from '../components/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';


const Tables = () => {
    const [jsonData, setJsonData] = useState([]);
    const [formData, setFormData] = useState({ name: '', latitude: '', longitude: '', macAddress: '' });


    //List All Beacons
    useEffect(() => {
        fetch('/beacon-management/list')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setJsonData(data);
                } else {
                    setJsonData([data]);
                }
            });
    }, []);

    //Add one Beacon
    const addBeacon = (event) => {
        event.preventDefault();

        const verify = verifyLabels();

        if (verify.error) {
            alert(verify.message);
            return;
        }

        const element = {
            name: formData.name,
            latitude: formData.latitude,
            longitude: formData.longitude,
            macAddress: formData.macAddress
        };

        fetch('/beacon-management', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(element)
        }).then(res => res.json())
            .then(data => {

                if ('status' in data) {
                    return;
                }

                alert('Beacon ' + data.name + ' added');

                window.location.reload(true);
            });

        setFormData({ name: '', latitude: '', longitude: '', macAdress: '' });
    };

    //Update one Beacon
    const updateBeacon = (element) => {
        fetch('/beacon-management', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(element)
        })
            .then(res => res.json())
            .then(data => {
                if ('status' in data) {
                    alert('Failure to update information!')
                }

                alert('Information successfully updated!');
                window.location.reload();
            });
    };

    //Detele one Beacon
    const deleteBeacon = (element) => {
        const result = window.confirm('The data cannot be recovered! Would you like to confirm this action?');

        if (!result) {
            return;
        }


        fetch('/beacon-management', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(element)
        }).then(res => res.json())
            .then(data => {
                if ('status' in data) {
                    return;
                }

                alert('Beacon ' + data.name + ' deleted');

                window.location.reload();
            });
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleLocalization = (event) => {
        var localization = event.target.value;

        if (localization === '') {
            return;
        }

        localization = localization.replace(/[^0-9.,\s-]/g, "");

        const [ longitude, latitude ] = localization.split(',');

        formData.latitude = latitude.trim();
        formData.longitude = longitude.trim();
    }


    const verifyLabels = () => {
        var message = 'The following errors were found: \n';
        var error = false;


        if (formData.name === '' || formData.name.length <= 3) {
            message += '#The field NAME cannot be empty or less than 3 characters.\n';
            error = true;
        }

        if ((formData.latitude || formData.longitude) === '') {
            message += '#Latitude and longitude coordinates cannot be empty.\n';
            error = true;
        }

        if (formData.macAddress === '') {
            message += '#MAC address cannot be empty.';
            error = true;
        }

        return { error: error, message: message };
    }

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
                            <form onSubmit={addBeacon}>
                                <div className='mb-5.5 flex flex-col gap-5.5 sm:flex-row'>
                                    <div className='w-full sm:w-1/2'>
                                        <label
                                            className='mb-3 block text-sm font-medium text-black dark:text-white'
                                            htmlFor='name'
                                        >
                                            Name
                                        </label>
                                        <div className='relative'>
                                            <input
                                                className='w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                                                type='text'
                                                name='name'
                                                id='name'
                                                onBlur={handleChange}
                                                placeholder='Name'
                                                defaultValue={formData.name}
                                            />
                                        </div>
                                    </div>

                                    <div className='w-full sm:w-1/2'>
                                        <label
                                            className='mb-3 block text-sm font-medium text-black dark:text-white'
                                            htmlFor='macAddress'
                                        >
                                            MAC Address
                                        </label>
                                        <div className='relative'>
                                            <input
                                                className='w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                                                type='text'
                                                name='macAddress'
                                                id='macAddress'
                                                onBlur={handleChange}
                                                placeholder='MAC Address'
                                                defaultValue={formData.macAddress}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-5.5'>
                                    <label
                                        className='mb-3 block text-sm font-medium text-black dark:text-white'
                                        htmlFor='Localization'
                                    >
                                        Localization
                                    </label>
                                    <input
                                        className='w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                                        type='text'
                                        name='localization'
                                        id='localization'
                                        onBlur={handleLocalization}
                                        placeholder='Localization'

                                    />
                                </div>
                                <div className='flex justify-end gap-4.5'>
                                    <button
                                        className='flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1'
                                        type='submit'
                                    >
                                        Add Beacon
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <BeaconTable jsonData={jsonData} updateBeacon={updateBeacon} deleteBeacon={deleteBeacon} />
            </div>
        </DefaultLayout>
    )
}

export default Tables;
