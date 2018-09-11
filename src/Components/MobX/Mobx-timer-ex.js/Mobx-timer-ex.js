import React, { Component } from 'react';
import { extendObservable } from 'mobx';
import { observer }  from 'mobx-react';
import { Button } from 'antd';
import styles from './Mobx-timer-ex.css';

class MobxTimerEx extends Component {
    constructor(props) {
        super(props);

        extendObservable(this, {
            counter: 0,
        })
    }

    startTimer = () => {
        this.interval = setInterval( () => this.tick(), 1000)
    }

    tick = () => {
        this.counter ++;
    }

    onReset = () => {
        this.counter = 0;
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className={styles.timerContainer}>
                <div className={styles.timerInnerGrid}>
                    <p>Seconds passed: {this.counter}</p>
                    <Button onClick={this.startTimer}>Start Timer</Button>
                    <Button onClick={this.onReset}>Reset</Button>
                </div>
            </div>
        );
    }

}

// observer is a higher order component wraps the class
export default observer(MobxTimerEx);