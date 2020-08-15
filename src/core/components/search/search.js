import React from 'react';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import './search.scss';

function Search(props) {

    const {name, onChangeValue, pageType, intl} = props;
    const {messages} = intl;

    const handleChange = (e) => {
        onChangeValue && onChangeValue(e);
    }
    
    const handlerKeyPress = (e) => {
        if(e['keyCode'] === 13) {
            handleChange(e);
        }
    }

    const getTitle = () => {
        
        if(pageType === 'all')
            return messages.product.all;

        if(pageType === 'exclusivo')
            return messages.product.exclusive;

        if(pageType === 'promocao')
            return messages.product.promotion;

        if(pageType === 'favorito')
            return messages.product.favorite;
    }

    return (
        <div className="container-header">
            <Row>
                <Col span={12}>
                    <h2><strong>{messages.general.company} -XPTO</strong> - {getTitle()}</h2>

                    <h4>{messages.product.listing}</h4>
                </Col>
                <Col span={12}>
                    <Input className="search-item" placeholder={messages.general.search} prefix={<SearchOutlined />}  value={name} maxLength="255" onChange={handleChange} onKeyPress={handlerKeyPress}/>
                </Col>
            </Row>
        </div>
    );
}

export default Search;