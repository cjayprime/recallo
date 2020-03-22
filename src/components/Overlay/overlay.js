import React, { Component } from "react";
import './overlay.css'
import {ReactComponent as CloseIcon} from '../../assets/img/close.svg';


class Overlay extends Component{

    render() {

        const { handleClose, show, children } = this.props;

        const showHideClassName = show ? 'overlay display-block' : 'overlay display-none';

        return(
            <div className={showHideClassName}>
                <section className='overlay-main'>
                    {children}
                    <div className="circle cursor">
                        <CloseIcon
                            onClick={handleClose}
                            className="close"
                        />
                    </div>
                </section>
            </div>
        )
    }

}

export default Overlay;