
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Row, Col, Divider, Layout, Switch, Card, Empty } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';

import { DataActions } from '../../core/store';
import Menu from '../../core/components/menu/menu'

import './details.scss';

const { Content } = Layout;

const Details = (props) => {
    const [productSelected, setProductSelected] = useState('');
    const {getDataApi, data, match, setFavorite, history, intl} = props;
    const {params} = match;
    const {messages} = intl;   

    useEffect(() => {  
        if(!data)  
          getDataApi();
        
        if(data) {
            const product = data.filter((item) => item.id === parseInt(params.id));
            setProductSelected(product[0]);
        }
      }, [getDataApi, data]); 

    useEffect(() => {
        if(data) {
            const product = data.filter((item) => item.id === parseInt(params.id));
            setProductSelected(product[0]);
        }
    }, []); 

    const onChangeSwitch = (checked) => {
        let newData = [...data];
        newData[productSelected.id - 1].favorito = checked;
        setFavorite(newData);
    }

    const handlerClick = () => {
        history.goBack()
    }
  
    const render = () => {
      
      return (
        <Layout>
          <Menu {...props}/>
          <Content>
            <div className="site-layout-background" style={{ padding: '24px 2rem', minHeight: 360 }}>
            <Row>
                <Col span={24}>
                    <div className="container-header">
                        <Row>
                            <Col span={14}>
                                <h3>
                                    <strong>{productSelected && productSelected.nome}</strong> &nbsp; &nbsp;
                                    <p>{productSelected && productSelected.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p> &nbsp; &nbsp;
                                    {productSelected && 
                                        <Switch defaultChecked={productSelected.favorito} onChange={(checked, e)=>{e.preventDefault(); e.stopPropagation(); onChangeSwitch(checked)}}/>
                                    }
                                    {productSelected && <span>{messages.general.make_favorite}</span>}
                                </h3>

                                <h4>{productSelected.decricaoCurta}</h4>
                            </Col>
                            <Col span={10}>
                                <div style={{width: '100px'}} onClick={handlerClick}>
                                    <RollbackOutlined />
                                </div>
                                {/* <Input className="search-item" placeholder="Buscar" prefix={<SearchOutlined />}  value={name} maxLength="255" onChange={handleChange} onKeyPress={handlerKeyPress}/> */}
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Divider />

                <Col span={24}>
                    <div className="content-body">
                        {productSelected &&
                            <Card
                                // hoverable
                                style={{ width: 362 }}
                                cover={
                                    <div>
                                        <img alt={productSelected.decricaoCurta} src={productSelected.imagem} height="358px" width="362px" style={{objectFit: 'cover'}}/>
                                        <span className={productSelected.exclusivo ? 'item-tag item-tag-exclusive' : productSelected.promocao ? 'item-tag item-tag-promotion' : 'item-tag'}>{productSelected.exclusivo ? 'Exclusivo' : productSelected.promocao ? 'Promoção' : ''}</span>
                                    </div>
                                }
                            />
                        }

                        {productSelected &&
                            <span className="description">
                                <strong style={{fontSize: '20px'}}>{messages.general.details}</strong>
                                <br/>
                                <br/>
                                {productSelected && productSelected.descricaoLonga}
                            </span>
                        }
                    </div>

                    {productSelected &&
                        <div style={{margin: '1rem 3rem', fontSize: '20px'}}>
                            <strong>{messages.general.datasheet}</strong> 
                        </div>
                    }

                    {!productSelected &&
                        <Empty
                            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                            imageStyle={{
                            height: 60,
                            }}
                            description={
                            <span>
                                <a>Nenhum resultado encontrado</a>
                            </span>
                            }
                        >
                        </Empty>
                    } 
                </Col>
                <Divider />

                <Col span={24}>
                    {productSelected && 
                        <div className="content-footer">
                            {
                                productSelected.fichaTecnica.map((item, id) => {
                                    return(
                                        <li key={id}>
                                            <strong>{item.titulo}</strong>&nbsp; &nbsp;
                                            {item.descricao}
                                        </li>
                                    )
                                })
                            }
                        </div>
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Details));