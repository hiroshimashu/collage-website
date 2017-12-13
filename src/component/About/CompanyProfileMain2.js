import React from 'react';
import ReactSVG from 'react-svg';



function CompanyProfileMain2(props) {
    return(
        <div style = { styles.mainWrapper }>
            <ReactSVG style = {{ ...props.img, position:'absolute'}} path = {props.src} alt = {props.subtitle} />
            <div style = {{ ...props.main, position: 'absolute' }}>
                {props.information}
            </div>
        </div>
    );
}

const styles = {
    mainWrapper: {
        display: 'flex',
    }
};

export default CompanyProfileMain2;