import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    avatar: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: '1px solid #DFE0EB',
    },
    container: {
        height: 40
    },
    cursorPointer: {
        cursor: 'pointer'
    },
    name: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        textAlign: 'right',
        letterSpacing: 0.2
    },
    separator: {
        borderLeft: '1px solid #DFE0EB',
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2
    },
    title: {
        fontFamily: 'Helvetica',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: 0.3
    }
});

function HeaderComponent(props) {
    const { icon, title, ...otherProps } = props;
    return (
        <Row className={css(styles.container)} vertical="center" horizontal="space-between" {...otherProps}>
            <span className={css(styles.title)}>{title}</span>
            <Row vertical="center">
                <div className={css(styles.cursorPointer)}>

                </div>

                <div style={{ marginLeft: 25 }} className={css(styles.cursorPointer)}>

                </div>
                <div className={css(styles.separator)}></div>
                <Row vertical="center">
                    <span className={css(styles.name, styles.cursorPointer)}>ANNNNE</span>
                    <img src="" alt="avatar" className={css(styles.avatar, styles.cursorPointer)} />
                </Row>
            </Row>
        </Row>
    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;