import React, { Component } from 'react';
import './FixedBackground.css'

export class FixedBackground extends Component {
    render () {
        let { blurred, src } = this.props;
        let classNames = ['album-art-background'];
        let styles = { backgroundImage: `url(${src})` };
        let imageUrl = blurred ? '' : src;
        if (blurred) {
            classNames.push('album-art-background--blurred');
            styles = {};
        }
    
        return <div
            className={classNames.join(' ')}
            style={styles}>
            {blurred &&
                <img src={src || '/assets/images/pixel.gif'} />
            }
        </div>

    }
}