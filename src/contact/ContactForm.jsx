import React, { Component } from 'react';
import {Flex, WingBlank, InputItem, Picker, List, Button} from 'antd-mobile';
import BasicInfoForm from './BasicInfoForm';
import ContactInfoForm from './ContactInfoForm';

class ContactForm extends Component {
    constructor () {
        super();
        this.state = {
            serverType: ["CaiNuanDiNuan"],
            area: 120,
            houseName: '',
            houseCount: 1,
            loadingBtn1: false,
            loadingBtn2: false,
            mobile: "",
            name: "",
            step: 1
        }
    }

    componentDidMount () {
        const {match} = this.props;
        console.log(match);
        this.setState({
            step: parseInt(match.params.step)
        });
    }

    handleAreaChange = (value) => {
        this.setState({area: value});
    }

    handleHouseNameChange = (value) => {
        this.setState({houseName: value});
    }

    handleServerTypeChange = (value) => {
        this.setState({serverType: value});
    }

    handleNextStep = () => {
        if (this.state.loadingBtn1) {
            return;
        }
        this.setState({
            loadingBtn1: true,
            step: this.state.step + 1
        });
    }

    handleMobileChange = (value) => {
        this.setState({mobile: value});
    }

    handleNameChange = (value) => {
        this.setState({name: value});
    }

    handleSubmit = () => {
        this.setState({loadingBtn2: true});
        console.log("submit", this.state);
    }

    render () {
        const step = this.state.step;
        let form;
        if (step === 1) {
            form = <BasicInfoForm {...this.state}
                                  handleNextStep={this.handleNextStep}
                                  serverTypeData={serverTypeData}
                                  handleAreaChange={this.handleAreaChange}
                                  handleHouseNameChange={this.handleHouseNameChange}
                                  handleServerTypeChange={this.handleServerTypeChange}
            />
        } else if (step === 2) {
            form = <ContactInfoForm {... this.state}
                                    handleMobileChange={this.handleMobileChange}
                                    handleNameChange={this.handleNameChange}
                                    handleSubmit={this.handleSubmit}
            />
        }
        return <WingBlank size="lg">
                {form}
            </WingBlank>
    }
}

const serverTypeData = [
    {
        label: "采暖-暗装暖气片",
        value: "CaiNuanDiNuan"
    },
    {
        label: "采暖-老房装暖气",
        value: "CaiNuanNuanQi"
    },
    {
        label: "空调-大金",
        value: "KongTiaoDaJin"
    },
    {
        label: "空调-格力",
        value: "KongTiaoGeLi"
    },
    {
        label: "空调-LG",
        value: "KongTiaoLG"
    },
    {
        label: "新风-博乐",
        value: "XinFengBoLe"
    },
    {
        label: "新风-大金",
        value: "XinFengDaJin"
    },
]

export default  ContactForm;