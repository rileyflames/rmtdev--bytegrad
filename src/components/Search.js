import {
    state,
    BASE_API_URL,
    searchInputEl,
    jobListSearchEl,
    numberEl,
    searchFormEl,
    getData
} from '../common.js';
import renderError from './Error.js';
import renderSpinner from './Spinner.js';
import renderJobList from './JobList.js';

const submitHandler = async (event) =>{
    //prevent default behavior 
    event.preventDefault();

    // get search text
    const searchText = searchInputEl.value;

    // validation
    const forbiddenPattern =/[0-9]/;
    const patternMatch = forbiddenPattern.test(searchText);
    if (patternMatch) {
        renderError('Your search may not contain numbers');
         return;      
    }
    // blur input
    searchInputEl.blur();

    // remove previous job items
    jobListSearchEl.innerHTML = '';

    // render spinner
    renderSpinner ('search');

    // fetch search results
    try {
        const data = await getData(`${BASE_API_URL}/jobs?search=${searchText}`);
             // extract job items
            const {jobItems} = data; 

            //
            //update state
            state.searchJobItems = jobItems;
            //
            // remove spinner
            renderSpinner('search');
            // render number of results
            numberEl.textContent = jobItems.length;
    
            // render job items in search job list
            renderJobList();

    }catch (error){
        renderSpinner('search');
        renderError(error.message);
    };
        
};

searchFormEl.addEventListener('submit', submitHandler);