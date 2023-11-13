import dayjs from 'dayjs';

import { api } from './apiClient';

const PATH = '/registrations/export/event';

export const adminExportRegistrationsServices = () => ({
  export: async (event_id: string) => {
    try {
      const response = await api.get(PATH + `/${event_id}`, {
        responseType: 'arraybuffer', // Specify the response type as arraybuffer (binary data)
      });

      // Create a blob from the arraybuffer response
      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      // Create a link element
      const link = document.createElement('a');

      // Set the link's href to a URL created from the blob
      link.href = window.URL.createObjectURL(blob);

      const currentDatetime = dayjs(new Date()).format('DD-MM-YYYY_HH[h]mm');
      // Set the download attribute to the specified file name
      link.setAttribute(
        'download',
        `participantes-acamps-2024-1__${currentDatetime}.xlsx`,
      );

      // Append the link to the document body
      document.body.appendChild(link);

      // Simulate a click on the link to initiate the download
      link.click();

      // Revoke the object URL and remove the link element
      window.URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error exporting registrations:', error);
      // Handle error as needed
    }
  },
});
