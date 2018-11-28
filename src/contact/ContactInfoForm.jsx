import React, { Component } from 'react';
import {Flex, WhiteSpace, InputItem, Picker, List, Button} from 'antd-mobile';

class ContactInfoForm extends Component {
    constructor () {
        super();
    }

    render () {
        const {
            handleMobileChange,
            handleNameChange,
            handleSubmit,
            mobile,
            name,
            loadingBtn2,
        } = this.props;
        return <div>
            <WhiteSpace size="lg"/>
            <Flex justify="center">
                <Flex.Item>
                    <InputItem type="mobile"
                               value={mobile}
                               placeholder="联系手机"
                               onChange={handleMobileChange}
                    >联系手机</InputItem>
                </Flex.Item>
            </Flex>
            <WhiteSpace size="lg"/>
            <Flex justify="center">
                <Flex.Item>
                    <InputItem type="text"
                               value={name}
                               placeholder="您的称呼"
                               onChange={handleNameChange}
                    >您的称呼</InputItem>
                </Flex.Item>
            </Flex>
            <WhiteSpace size="lg"/>
            <Button type="primary" size="large" onClick={handleSubmit} loading={loadingBtn2}>确定</Button>
        </div>
    }
}

export default  ContactInfoForm;