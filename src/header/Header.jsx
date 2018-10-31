import React, { Component } from 'react';
import { NavBar, Icon} from 'antd-mobile';

class Header extends Component {
    constructor () {
        super();
        this.state = {

        }
    }

    render () {
        return <div>
            <NavBar
                mode="dark"
                icon={<Icon key="1" type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="0" type="ellipsis" />
                ]}
            >蔚来舒适家</NavBar>
        </div>
    }
}

export default Header;