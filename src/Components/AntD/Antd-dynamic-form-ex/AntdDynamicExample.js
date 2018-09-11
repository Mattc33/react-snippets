import React, { Component } from 'react';
import styles from './AntdDynamicExample.css';
import { Form, Input, Icon, Button } from 'antd';
const FormItem = Form.Item;

// ! uuid seems to be a counter that 
let uuid = 0;
class DynamicFieldSet extends Component {

    remove = (k) => {
        const { form } = this.props;
        const keys = form.getFieldValue('keys');
        if (keys.length === 1) {
            return;
        }
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    }

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
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
        }
        });
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');

        // const formItems = keys.map((k, index) => {
        //     return (
        //         <FormItem
        //             label={index === 0 ? 'Passengers' : ''}
        //             required={false}
        //             key={k}
        //         >
        //             {getFieldDecorator(`names[${k}]`, 
        //                 {
        //                     validateTrigger: ['onChange', 'onBlur'],
        //                     rules: [{
        //                         required: true,
        //                         whitespace: true,
        //                         message: "Please input passenger's name or delete this field.",
        //                     }],
        //                 }
        //             )(
        //             <Input placeholder="passenger name" style={{ width: '60%', marginRight: 8 }} />
        //             )}
        //             {keys.length > 1 ? (
        //                 <Icon
        //                     className={styles.dynamicDeleteButton}
        //                     type="minus-circle-o"
        //                     disabled={keys.length === 1}
        //                     onClick={() => this.remove(k)}
        //                 />
        //             ) : null}
        //         </FormItem>
        //     );
        // });
    
        return (
            <Form onSubmit={this.handleSubmit}>
                {/* {formItems} */}
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

export default Form.create()(DynamicFieldSet);
          