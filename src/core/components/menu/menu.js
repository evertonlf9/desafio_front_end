import React from 'react';
import { Layout, Menu } from 'antd';

import './menu.scss';

const { Sider } = Layout;

function MenuComp(props) {
    const{setPageType, history, intl} = props;
    const {push} = history;
    const {messages} = intl;

    const handlerClick = (e) => {
        setPageType(e.key)
        push(`/${e.key}`);
    }
    
    const handlerKeyPress = (e, a) => {
        if(e.key === "Enter")
            handlerClick(a)
    }

    return (
        <>
            <Sider
                width={'150'}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                
                }}
                onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
                }}
            >
                <div className="logo">
                    <img alt="" src="../../../assets/img/code.png" />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['all']}>
                    <Menu.Item key="all" data-testid="menu-all" onClick={handlerClick} onKeyPress={(e)=>handlerKeyPress(e, {key: 'all'})} tabIndex="0">
                        <img alt="" src="../../../assets/img/supplices.png" />
                        <span>{messages.general.all}</span>
                    </Menu.Item>
                    <Menu.Item key="exclusivo" data-testid="menu-exclusivo" onClick={handlerClick} onKeyPress={(e)=>handlerKeyPress(e, {key: 'exclusivo'})} tabIndex="0">
                        <img alt="" src="../../../assets/img/box.png" />
                        <span>{messages.general.exclusive}</span>
                    </Menu.Item>
                    <Menu.Item key="promocao" data-testid="menu-promocao" onClick={handlerClick} onKeyPress={(e)=>handlerKeyPress(e, {key: 'promocao'})} tabIndex="0">
                        <img alt="" src="../../../assets/img/gift-box.png"/>
                        <span>{messages.general.promotion}</span>
                    </Menu.Item>
                    <Menu.Item key="favorito" data-testid="menu-favorito" onClick={handlerClick} onKeyPress={(e)=>handlerKeyPress(e, {key: 'favorito'})} tabIndex="0">
                        <img alt="" src="../../../assets/img/like.png" />
                        <span>{messages.general.favorite}</span>
                    </Menu.Item>
                </Menu>
                <div className="logo-footer" data-testid="menu-footer">
                    <img alt="" src="../../../assets/img/finch.png" />
                </div>
            </Sider>
        </>
    );
}

export default MenuComp;