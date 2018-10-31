import React, { Component } from 'react';
import {Flex, WhiteSpace, WingBlank, InputItem, Picker, List} from 'antd-mobile';

class ContactForm extends Component {
    constructor () {
        super();
        this.state = {
            serverType: 'warm',
            area: 0,
            houseName: '',
            houseCount: 1,
        }
    }

    serverTypeData = [
        {
            label: "采暖·供暖",
            value: "warm"
        },{
            label: "空调·冷气",
            value: "cold"
        }
    ]

    handleAreaChange = (value) => {
        this.setState({area: value});
    }

    handleHouseNameChange = (value) => {
        this.setState({houseName: value});
    }

    render () {
        return <div>
            <WingBlank size="lg">
                <WhiteSpace size="lg"/>
                <Picker
                    data={this.serverTypeData}
                    title="选择服务"
                    value={this.state.serverType}
                    onChange={v => this.setState({ serverType: v })}
                    onOk={v => this.setState({ serverType: v })}
                >
                    <List.Item arrow="horizontal">选择服务</List.Item>
                </Picker>
                <WhiteSpace size="lg"/>
                <Flex justify="center">
                    <Flex.Item>
                        <InputItem type="number"
                                   value={this.state.area}
                                   placeholder="住房面积"
                                   onChange={this.handleAreaChange}
                        />
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg"/>
                <Flex justify="center">
                    <Flex.Item>
                        <InputItem type="text"
                                   value={this.state.houseName}
                                   placeholder="楼盘名称"
                                   onChange={this.handleHouseNameChange}
                        />
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="lg"/>
            </WingBlank>
        </div>
    }
}

export default  ContactForm;