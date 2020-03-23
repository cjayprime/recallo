import React, { Component } from "react";
import './overlay.css'
import {ReactComponent as CloseIcon} from '../../assets/img/close.svg';


class Overlay extends Component{

    render() {

        const { toggle, open, children } = this.props;

        const showHideClassName = open ? 'overlay display-block' : 'overlay display-none';

        return(
            <div className={showHideClassName} onClick={toggle}>
                <section className='overlay-main'>
                    {children}
                    <div className="circle cursor">
                        <CloseIcon
                            onClick={toggle}
                            className="close"
                        />
                    </div>
                </section>
            </div>
        )
    }

}

export default Overlay;