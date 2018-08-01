import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

export function SideNavItem (props) {
    let { label, url, icon, external, onActivated } = props;

    if (external) {
        return (
            <a
                onClick={onActivated}
                href={url}
                target="_blank"
                className="side-nav__nav-item">
                <FontAwesomeIcon icon={icon} size="lg" />
                {label}
            </a>
        );
    } else {
        return (
            <Link
                onClick={onActivated}
                to={url}
                className="side-nav__nav-item">
                <FontAwesomeIcon icon={icon} size="lg" />
                {label}
            </Link>
        );
    }
}