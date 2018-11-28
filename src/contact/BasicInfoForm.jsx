import React, { Component } from 'react';
import {Flex, WhiteSpace, InputItem, List, Button, Checkbox} from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;

class BasicInfoForm extends Component {
    constructor () {
        super();
    }

    render () {
        const {
            serverTypeData,
            handleNextStep,
            handlePreStep,
            handleAreaChange,
            handleHouseNameChange,
            handleServerTypeChange,
            serverType,
            area,
            houseName,
            loadingBtn1,
        } = this.props;
        return <div>
            <WhiteSpace size="lg"/>
            <List renderHeader="您需要什么服务">
                {serverTypeData.map(item => (
                    <CheckboxItem key={item.value}
                                  onChange={handleServerTypeChange.bind(this, item.value)}>
                        {item.label}
                    </CheckboxItem>
                ))}
            </List>
            <WhiteSpace size="lg"/>
            <Flex justify="center">
                <Flex.Item>
                    <InputItem type="number"
                               value={area}
                               placeholder="住房面积"
                               extra="m²"
                               onChange={handleAreaChange}
                    >您的住房面积大小</InputItem>
                </Flex.Item>
            </Flex>
            <WhiteSpace size="lg"/>
            <Flex justify="center">
                <Flex.Item>
                    <InputItem type="text"
                               value={houseName}
                               placeholder="楼盘名称"
                               onChange={handleHouseNameChange}
                    >您的楼盘名称</InputItem>
                </Flex.Item>
            </Flex>
            <WhiteSpace size="lg"/>
            <Button type="primary" size="large" onClick={handleNextStep} loading={loadingBtn1}>下一步</Button>
        </div>
    }
}

export default  BasicInfoForm;