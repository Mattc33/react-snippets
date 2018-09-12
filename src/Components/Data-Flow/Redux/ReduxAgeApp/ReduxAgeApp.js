import React, {Component} from 'react'
import styles from './ReduxAgeApp.module.css'
import { connect } from 'react-redux'

class ReduxAgeApp extends Component {

    render() {
        return (
        <div className={styles.ageApp}>
            <h2>AgeApp Using Redux</h2>
            <div>Age: <span>{this.props.age}</span></div>
            <button onClick={this.props.onAgeUp}>Age UP</button>
            <button onClick={this.props.onAgeDown}>Age DOWN</button>
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        age:state.age
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch({type: 'AGE_UP'}),
        onAgeDown: () => dispatch({type: 'AGE_DOWN'})
    }
}

export default connect(mapStateToProps, mapDispachToProps)(ReduxAgeApp)