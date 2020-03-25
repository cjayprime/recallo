import React, { Component } from "react";
import './overlay.css'
import {ReactComponent as CloseIcon} from '../../assets/img/close.svg';


class Overlay extends Component{

    render() {

        const { toggle, open, children } = this.props;

        const showHideClassName = open ? 'overlay display-block' : 'overlay display-none';

        return(
            <div className={showHideClassName}>
                <section className='overlay-main slideInRight'>
                    {children}
                    <div className="circle cursor"  onClick={toggle}>
                        <CloseIcon
                            className="close"
                        />
                    </div>
                </section>
            </div>
        )
    }

}

export default Overlay;