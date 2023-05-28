import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumb';
import { AzureMapsProvider } from 'react-azure-maps';
import MapController from './MapController.tsx';

const Calendar = () => {

  return (
    <DefaultLayout>
      <Breadcrumb pageName='Map Overview' />
      <AzureMapsProvider>
        <MapController />
      </AzureMapsProvider>
    </DefaultLayout>
  )
}

export default Calendar;
