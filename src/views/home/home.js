import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Row, Col, Divider, Layout } from 'antd';

import { DataActions } from '../../core/store';
import Card from '../../core/components/card/card';
import Search from '../../core/components/search/search';
import Menu from '../../core/components/menu/menu'

import './home.scss';

const { Content } = Layout;

const Home = (props) => {
    const [searchName, setSearchName] = useState('');
    const {getDataApi, data, pageType, setFavorite, loading} = props;

    useEffect(() => {  
      if(!data)  
        getDataApi();
    }, [getDataApi, data]); 

    const onChangeFavoriteCard = (item, checked) => {
      let newData = [...data];
      newData[item.id - 1].favorito = checked;
      setFavorite(newData);
    }

    const handlerChangeName = (e) => {
      setSearchName(e.currentTarget.value.trim());
    }

    const getFilterName = () => {
      if(!data) return [];
      return data.filter((item) => (item.nome.toLowerCase().match(searchName.toLowerCase()) && (pageType === 'all' || item[pageType]) ));
    }
  
    const render = () => {
      
      return (
        <Layout>
          <Menu {...props}/>
          <Content>
            <div className="site-layout-background" style={{ padding: '24px 2rem', minHeight: 360 }}>
            <Row>
              <Col span={24}>
                <Search {...props} onChangeValue={handlerChangeName} name={searchName}/>
              </Col>
              <Divider />
              <Col span={24}>
                <Card {...props} loading={loading} data={getFilterName()} onChange={onChangeFavoriteCard} type={pageType}/>
              </Col>
            </Row>
          </div>
          </Content>
        </Layout>
      )
    }

    return(<>{render()}</>)    
}

const mapStateToProps = state => {
  const {data} = state;
  
	return {
        loading: data.loading,
        data: data.data,
        pageType: data.pageType,
	};
};

const mapDispatchToProps = dispatch => bindActionCreators({ ...DataActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Home));