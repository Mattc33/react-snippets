import React, { Component } from 'react';
import styles from './AntdDynamicForm.css';
import { Form, Input, Icon, Button } from 'antd';

const FormItem = Form.Item;

let uuid = 0;
class AntdDynamicForm extends Component {

    remove = (k) => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        if (keys.length === 0) {
            return;
        }
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

    // * Seems like every time Add Field is pressed, the uuid counter var is added to
    // * keys arr is merged with the new value via .convat
    // * form is updated via setFieldsValue, keys field is now the updated arr after the concat
    add = () => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        uuid++;
        form.setFieldsValue({
            keys: nextKeys,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); // ! disables native form submit handler
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        console.log(e.target.value);
    }

    render() {

        // ! keys is an array

        // ! figure out what getFieldDecorator() is doing
        // ! why is it taking 2 arguments
        // ! what is it doing

        // ! figure out what getFieldValue() is doing
        // ! it seems to be returning an array. But of what?
        const { getFieldDecorator, getFieldValue } = this.props.form;
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        console.log(keys);
        
        // ! Keys is storing an array of numbers

        // ------------------------------------------------------------------------------------

        // * This is a var that stores an array of JSX
        const formItems = keys.map((k, index) => {
            console.log(k)
            return (
                <FormItem
                    required={true}
                    key={k} // ! key is set equal to argument passed in K.
                >
                    {
                        getFieldDecorator(`names[${k}]`, 
                            {
                                validateTrigger: ['onChange', 'onBlur'],
                                rules: [{
                                    required: true,
                                    whitespace: true,
                                    message: "Please input passenger's name or delete this field.",
                                }],
                            }
                        )
                        (
                            <Input placeholder={`Enter test number ${index+2}`}  style={{ width: '60%', marginRight: 8 }} />
                        )
                    }
                    {
                        keys.length > 0 ? ( // If keys array is greater then 0, meaning if the 
                                            // dynamic form has any elements inside, reveal the delete button
                                            // else reveal nothing
                            <Icon
                                className={styles.dynamicDeleteButton}
                                type="minus-circle-o"
                                disabled={keys.length === 0}
                                onClick={() => this.remove(k)}
                            />
                        ) : null
                    }
                </FormItem>
            );
        });

        // * Baserender without adding forms
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem>
                    <Input placeholder="Enter Test Number" style={{ width: '60%', marginRight: 8 }} />
                </FormItem>
                {formItems}
                <FormItem>
                    <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                    <Icon type="plus" /> Add field
                    </Button>
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </FormItem>
            </Form>
        );

    }

}

// ! Component needs a wrapper of Form.create()
export default Form.create()(AntdDynamicForm);