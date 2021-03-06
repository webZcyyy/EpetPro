import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as farmFoodActions from './farmFoodAction';
import spinner from '../spinner/spinner';
import './farmFood.scss';

class FarmFoodComponent extends React.Component {
    state = {
        fmdata: []
    }
    back() {
        window.history.back()
    }
    componentDidMount() {
        this.props.getdata().then((res) => {
            res.map((item) => {
                this.state.fmdata.push(item)
            })
            this.setState({ fmdata: this.state.fmdata })
        })
    }

    render() {
        return (
            <div className="natureBridge">
                <div className="titleTop">
                    <i className="iconfont icon-back titleTopLeft" onClick={this.back}></i>
                    <h2>约翰农场品牌特卖</h2>
                </div>
                <div className="imgbox">
                    <img src="../src/assets/img/navList/1548aed1ca5f0afa82b6315d0a21002b.jpg" />
                </div>
                <div className="natureBridge-main">
                    <ul>
                        {
                            this.state.fmdata.map((item, idx) => {
                                return <li key={idx}>
                                    <img src={item.imgurl} width="100%" />
                                    <p className="title">{item.title}</p>
                                    <p className="curprice">¥{item.curprice}.00</p>
                                    <p className="oriprice">原价：¥{item.oriprice}.00</p>
                                    <span className="buy">立即购买</span>
                                </li>
                            })
                        }
                        <li>
                            <img src="../src/assets/img/navList/stance.jpg" width="100%" height="100%" />
                        </li>
                    </ul>

                </div>

            </div>
        )
    }
}
const mapToState = function (state) {
    return {
        // type: state.BrandSaleReducer.res1 || [],
        // brandsale: state.BrandSaleReducer.res2 || []
        result: state.farmFoodReducer.res || []
    }
}
export default connect(mapToState, farmFoodActions)(FarmFoodComponent);