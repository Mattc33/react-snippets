import React, { Component } from 'react';
import classes from './Header.module.css';

import { NavLink } from 'react-router-dom'
import { Select } from 'antd';

const { Option, OptGroup } = Select;

// const nav = [
//     {
//         link: '/dataflow/Parent_parentToChild',
//         value: 'parentToChild',
//         display: 'Parent To Child'
//     },
//     {
//         link: '/dataflow/Parent_childToParent',
//         value: 'parentToChild',
//         display: 'Parent To Child'
//     },
// ]

class Header extends Component {

    

    render() {
        return (
            <div className={classes.header}>
                <h2>React Snippets</h2>
                <div className={classes.toolbarGroup}>
                    <Select
                        showSearch
                        style={{width: 300}}
                        placeholder='Navigate to Snippet'
                    >
                        <Option value='home'>
                            <NavLink to='/' exact >Home</NavLink>
                        </Option>
                        <OptGroup label="Data Flow">
                            
                            <Option value='parentToChild'>
                                <NavLink to='/dataflow/Parent_parentToChild' exact>
                                    Parent To Child
                                </NavLink>
                            </Option>
                            
                            <Option value='childToParent'>
                                <NavLink to='/dataflow/Parent_childToParent' exact>
                                    Child To Parent
                                </NavLink>
                            </Option>

                            <Option value='LocalStateAgeApp'>
                                <NavLink to='/dataflow/LocalStateAgeApp' exact>
                                    AgeApp Using Local State
                                </NavLink>
                            </Option>
                        </OptGroup>
                    </Select>
                </div>
            </div>
        )
    }
}

export default Header;