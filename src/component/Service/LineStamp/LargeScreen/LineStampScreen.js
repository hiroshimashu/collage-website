import React, {Component} from 'react';
import { connect } from 'react-redux';
import LineStore from '../../../../static/lineStoreLarge.png';
import Characters from '../../../../static/characters.png';
import '../../../../service4.css';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const img1Width = windowWidth * 0.609;
const img1Height = windowHeight * 0.415;
const img1X = 262 / 1200 * windowWidth
const img1Y = windowHeight * 228 / 750;

const img4Width = windowWidth * 0.131;
const img4Height = windowHeight * 0.061;
const img4X = 523 / 1200 * windowWidth
const img4Y = windowHeight * 630 / 750;


class LineStampScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            width: this.props.window.width,
            img1Width: this.props.window.width * 0.609,
            img1X: this.props.window.width * 262 / 1200,
            lineX: this.calculateX(this.props.window.width, img4Width)
        };

        this.calculateX = this.calculateX.bind(this);
    }

    componentWillReceiveProps() {
        this.setState(() => {
            return {
                width: this.props.window.width,
                img1Width: this.props.window.width * 0.609,
                img1X: this.props.window.width * 262 / 1200,
                lineX: this.calculateX(this.props.window.width, img4Width)
            };
        });
    }
    calculateX(window, width) {
        return (window - width) / 2;
    }


    render() {
        return (
            <div>
                <img className = 'characters' src={Characters} alt='character' style={styles.character}/>
                <img className = 'line' src={LineStore} alt='line' style={styles.line} />
            </div>
        );
    }
}

const styles = {
    character: {
        position: 'absolute',
    },
    line: {
        position: 'absolute',
    },
}

function mapStateToProps(state) {
    return {
        window: state.windowsize
    };
}



export default connect(mapStateToProps)(LineStampScreen);