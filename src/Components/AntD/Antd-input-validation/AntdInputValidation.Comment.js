import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

const hasErrors = (fieldsError) => {
    // ! so if any fields contains error return true
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
  

class AntdInputValidation extends Component {
    
    state = {
    }

    componentDidMount() {

    }

    render() {
       
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // ! these curly braces around a variable is called a 'destructuring expression' 
        // ! it is a short cut to assign object props
        /* 
            !  {x, y} = foo;
            ! translates to
            ! x = foo.x;
            ! y = foo.y; 
        */
        // const { getFieldDecorator } = this.props.form;
        // const getFieldDecorator = this.props.form.getFieldDecorator;

        console.log( 
            // ! two method calls?
            // ! It means that the first fn is called and then that returned fn is called immediately
            // !
            // ! const add = (x) => (y) => x + y;
            // ! add(3)(4) // We get 7
            // !
            // ! 3 is passed into add(x) which immediately triggers the anoynomous fn inside which takes y, that inside fn returns the addition of x + y
            // ! 3 + 4 = 7
            // !
            // ! https://codepen.io/Mattc3303/pen/zaWNzK?editors=0011

            // getFieldDecorator( 'name', {rules: [{ required: true, message: 'test' }]} )(<Input placeholder="Username" />)

            // ? this getFieldDecorator Fn is returning
            // ? getFieldDecorator takes 2 args string name and field option
            // ? fieldOption is an object, one of which is rules which is an array of obj
            // ? 2 props required: true/false if input should be required on/off
            // ? message to take a string for display if method getFieldDecorator returns false
        );

        // const userNameError = isFieldTouched('userName') && getFieldError('userName');
        // const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
            <div>
                <h1>Experimenting with Antd input validation and error msg</h1>
                <h3>& also toggle disabled on a button on and off based on valididation of the inputs</h3>
                <Form layout="vertical">
                    <FormItem
                        // ! if (userNameError === true) { 
                        // !    return 'error'
                        // ! } else {
                        // !    return ''    
                        // ! }
                        // validateStatus={userNameError ? 'error' : ''}
                        // help={userNameError || ''}
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
                            // ! this is calling a fn in the global name space called hasError we pass in getFieldsError() to it
                            // ! i am not supplying a optional arg so I am getting all fields errors?
                            // ! if disabled = true -- it is disabled
                            // ! else if disabled = false -- it is NOT disabled
                            disabled={hasErrors(getFieldsError())} 
                            // * disabled if fn hasError is true, takes getFieldsError() as arg
                            // disabled={true}
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
