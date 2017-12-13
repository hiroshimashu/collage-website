import React from 'react';
import ReactSVG from 'react-svg';



function CompanyProfileMain(props) {
    return(
        <div style = { styles.mainWrapper }>
            <ReactSVG style = {{ ...props.img, position:'absolute'}} path = {props.src} alt = {props.subtitle}/>
            <img style = {{ ...props.main, position: 'absolute' }}  src = {props.src2} />
        </div>
    );
}

const styles = {
    mainWrapper: {
        display: 'flex',
    }
};

export default CompanyProfileMain;