import{
    state,
    bookmarksBtnEl,
    jobDetailsEl,
    jobListBookmarksEl
}
from '../common.js';
import renderJobList from './JobList.js';


const clickHandler = (event)=>{
    // don't continue if click was outside bookmark button
    if (!event.target.className.includes('bookmark')) return;

    // update state
    state.bookmarkJobItems.push(state.activeJobItem);

    // update bookmark item
    document.querySelector('.job-info__bookmark-icon').classList.toggle('job-info__bookmark-icon--bookmarked');
};

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


jobDetailsEl.addEventListener('click', clickHandler)
bookmarksBtnEl.addEventListener('mouseenter', mouseEnterHandler);
jobListBookmarksEl.addEventListener('mouseleave', mouseLeaveHandler);