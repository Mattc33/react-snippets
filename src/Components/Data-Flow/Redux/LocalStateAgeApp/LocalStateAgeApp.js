import React, {Component} from 'react'
import styles from './LocalStateAgeApp.module.css'

class LocalStateAgeApp extends Component {

    state = {
        age: 21
    }

    onAgeUp = () => this.setState({age: this.state.age + 1})
    
    onAgeDown = () => this.setState({age: this.state.age - 1})
    
    render() {
        return (
            <div className={styles.ageApp}>
                <div>Age: <span>{this.state.age}</span></div>
                <button onClick={this.onAgeUp}>Age UP</button>
                <button onClick={this.onAgeDown}>Age DOWN</button>
            </div>
        )
    }

}

export default LocalStateAgeApp