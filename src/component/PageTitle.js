import React from 'react';

function PageTitle(props) {
    return(
        <div className="pageTitle" style = {{ fontSize:'48px'}}>
            {props.children}
        </div>
    );
}

export default PageTitle;

