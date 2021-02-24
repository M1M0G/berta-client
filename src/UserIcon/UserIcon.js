import {Avatar, Typography, Space} from "antd";
import React, {Component} from "react"
import "./UserIcon.less"

const { Text, Title} = Typography;
class UserIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return (
        <div className="user-information">
            <Space align="center" >
                <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                <div className = "user-settings">
                    <Text>Xaчу шаурму</Text>
                    <Text type= "secondary" style={{fontSize:"10"}}>"Статус"</Text>  
                </div>

            </Space>
        </div>
        );
    }
}
 
export default UserIcon;