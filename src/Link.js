import React from 'react';
import classnames from '../node_modules/classnames/';
import {history} from './util';
import PropTypes from 'prop-types';

const Link = (props) => {

    const className = classnames(
        props.className,
        {link: props.theme !== 'no'},
    );

    const onClick = (e) => {
        const newTab = e.metaKey || e.ctrlKey;
        if (!newTab && !props.href.startsWith('http')) {
            e.preventDefault();
            history.push(props.href);
        }
    };

    return (
        <a className={className} href={props.href} onClick={onClick}>
            {props.children}
        </a>
    );

};

Link.propTypes = {
    href: PropTypes.string.isRequired,
    theme: PropTypes.oneOf([
        'no',
        'default',
    ]),
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]).isRequired,
    className: PropTypes.string,
};

Link.defaultProps = {
    theme: 'default',
    className: '',
};

export default Link;