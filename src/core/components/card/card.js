import React from 'react';
import { Card, Switch, Empty, Spin } from 'antd';

import './card.scss';

const { Meta } = Card;

function CardComp(props) {
    const {data, onChange, type, loading, history, intl} = props;
    const {push} = history;
    const {messages} = intl;
   
    const onChangeSwitch = (item, checked) => {
        onChange && onChange(item, checked)
    }
  
    const renderSwitch = (item) => {
        return (
            <div className="card-header">          
            <p>{item.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <Switch defaultChecked={item.favorito} onChange={(checked, e)=>{e.preventDefault(); e.stopPropagation(); onChangeSwitch(item, checked)}}/>
            <span>{messages.general.make_favorite}</span>
            </div>  
        )
    }

    const handlerClickCard = (item) => {
        push(`/details/${item.id}`);
    }

    return (
        <div className="container-card">
            {(data && data.length > 0  && !loading) && data.map((item, id) => {
                
                if(type === "all" || item[type])
                    return (
                        <Card
                            data-testid={`card-${id}`}
                            key={id}
                            hoverable
                            style={{ width: 362 }}
                            // title="Card"
                            cover={
                                <div onClick={handlerClickCard.bind(this, item)}>
                                    <img alt={item.decricaoCurta} src={item.imagem} height="187px" width="362px" style={{objectFit: 'cover'}}/>
                                    <span className={item.exclusivo ? 'item-tag item-tag-exclusive' : item.promocao ? 'item-tag item-tag-promotion' : 'item-tag'}>{item.exclusivo ? 'Exclusivo' : item.promocao ? 'Promoção' : ''}</span>
                                </div>
                            }
                        >                                         
                            {renderSwitch(item)}
                            <Meta title={item.nome} description={item.decricaoCurta} />
                        </Card>
                    )
            })}  

            {loading &&
                <div className="container-spin">
                    <Spin size="large" tip="Loading..." />
                </div>
            }

            {(data && data.length === 0 && !loading) &&
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
        </div>
    );
}

export default CardComp;