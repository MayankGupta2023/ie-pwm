// utils/fetchDataFromGoogleSheet.js

import axios from 'axios';

const fetchDataFromGoogleSheet = async () => {
    try {
        const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vTXmHdYABDHDCuq8TO4R6i9e-eJaVIUoKNhJZafjI-WdBdr4hGW0WtZs8ARwAc6_EX_El87MEy1tJvO/pubhtml');
        // Assuming your Google Sheet data is in the response.data
        console.log("this is response",response);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Google Sheet:', error);
        return [];
    }
};

export default fetchDataFromGoogleSheet;
