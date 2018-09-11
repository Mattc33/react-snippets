import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class AntdInputValidation extends Component {

    hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }
    
    render() {
       
        const { getFieldDecorator, getFieldsError } = this.props.form;

        return (
            <div>
                <h1>Experimenting with Antd input validation and error msg</h1>
                <h3>& also toggle disabled on a button on and off based on valididation of the inputs</h3>
                
                <Form layout="vertical">
                    <FormItem
                        style={{'color': 'red'}}
                    >
                        {
                            getFieldDecorator('userName', {rules: [{ required: true, message: 'Please input your username!' }]})
                                (<span>
                                    <span style={{'color': 'black'}}>User Name: </span> 
                                    <Input placeholder="Username" />
                                </span>)
                        }
                    </FormItem>

                    <FormItem>
                        <Button
                            style={{'width': '60px', 'height': '40px', 'margin-top': '10px'}}
                            type="default"
                            htmlType="submit"
                            disabled={this.hasErrors(getFieldsError())} 
                        >
                        Log in
                        </Button>
                    </FormItem>
                </Form>

            </div>
        )
    }

}

export default Form.create()(AntdInputValidation);


/*



*/

/*
    <FormItem
        validateStatus={userNameError ? 'error' : ''}
        help={userNameError || ''}
        >
        {getFieldDecorator('userName', {
        rules: [{ required: true, message: 'Please input your username!' }],
        })(
        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        )}
    </FormItem>
*/
