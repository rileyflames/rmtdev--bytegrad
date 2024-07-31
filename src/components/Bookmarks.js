import{
    state,
    bookmarksBtnEl,
    jobDetailsEl,
    jobListBookmarksEl
}
from '../common.js';
import renderJobList from './JobList.js';

const mouseEnterHandler = ()=>{
    // make bookmarks button look active
    bookmarksBtnEl.classList.add('bookmarks-btn--active');
    
    // make job list vissible
    jobListBookmarksEl.classList.add('job-list--visible');
};

const mouseLeaveHandler = ()=>{
     // remove active bookmark class
     bookmarksBtnEl.classList.remove('bookmarks-btn--active');
    
     // remove job list visiblity
     jobListBookmarksEl.classList.remove('job-list--visible');
}

bookmarksBtnEl.addEventListener('mouseenter', mouseEnterHandler);
jobListBookmarksEl.addEventListener('mouseleave', mouseLeaveHandler);