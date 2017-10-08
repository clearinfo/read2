import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';
class ZmitiAreaListApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			display:'none',
			active:'none',
			activea:'none',
			provicetip:'none',
			dialogname:'',
			dialogcode:0,
			dialogimgurl:'',
			dialogtext:'',
			dialogdes:'',
			dialogtip:'',
			dialogkey:'',
			dialogparentkey:'',
			dataCode:[{
				key:1,
				name:'黑龙江大厦',
				code:90909,
				imgurl:'./assets/images/code1.png',
			},{
				key:2,
				name:'吉林大厦',
				code:3131,
				imgurl:'./assets/images/code2.png',
			},{
				key:3,
				name:'辽宁大厦',
				code:82012,
				imgurl:'./assets/images/code3.png',
			},{
				key:4,
				name:'河北大厦',
				code:82072,
				imgurl:'./assets/images/code4.png',
			},{
				key:5,
				name:'河南大厦',
				code:86042,
				imgurl:'./assets/images/code5.png',
			},{
				key:6,
				name:'山东大厦',
				code:84022,
				imgurl:'./assets/images/code6.png',
			},{
				key:7,
				name:'江苏大厦',
				code:83052,
				imgurl:'./assets/images/code7.png',
			},{
				key:8,
				name:'山西大厦',
				code:82202,
				imgurl:'./assets/images/code8.png',
			},{
				key:9,
				name:'陕西大厦',
				code:86022,
				imgurl:'./assets/images/code9.png',
			},{
				key:10,
				name:'甘肃大厦',
				code:86102,
				imgurl:'./assets/images/code10.png',
			},{
				key:11,
				name:'四川大厦',
				code:86032,
				imgurl:'./assets/images/code11.png',
			},{
				key:12,
				name:'青海大厦',
				code:82032,
				imgurl:'./assets/images/code12.png',
			},{
				key:13,
				name:'湖南大厦',
				code:86112,
				imgurl:'./assets/images/code13.png',
			},{
				key:14,
				name:'湖北大厦',
				code:81082,
				imgurl:'./assets/images/code14.png',
			},{
				key:15,
				name:'江西大厦',
				code:83202,
				imgurl:'./assets/images/code15.png',
			},{
				key:16,
				name:'安徽大厦',
				code:83142,
				imgurl:'./assets/images/code16.png',
			},{
				key:17,
				name:'浙江大厦',
				code:83072,
				imgurl:'./assets/images/code17.png',
			},{
				key:18,
				name:'福建大厦',
				code:83192,
				imgurl:'./assets/images/code18.png',
			},{
				key:19,
				name:'广东大厦',
				code:86142,
				imgurl:'./assets/images/code19.png',
			},{
				key:20,
				name:'港澳台大厦',
				code:85062,
				imgurl:'./assets/images/code33.png',
			},{
				key:21,
				name:'贵州大厦',
				code:86062,
				imgurl:'./assets/images/code21.png',
			},{
				key:22,
				name:'云南大厦',
				code:86082,
				imgurl:'./assets/images/code22.png',
			},{
				key:23,
				name:'海南大厦',
				code:80032,
				imgurl:'./assets/images/code23.png',
			},{
				key:24,
				name:'内蒙古大厦',
				code:81212,
				imgurl:'./assets/images/code24.png',
			},{
				key:25,
				name:'新疆大厦',
				code:1421,
				imgurl:'./assets/images/code25.png',
			},{
				key:26,
				name:'宁夏大厦',
				code:84062,
				imgurl:'./assets/images/code26.png',
			},{
				key:27,
				name:'西藏大厦',
				code:4323,
				imgurl:'./assets/images/code27.png',
			},{
				key:28,
				name:'广西大厦',
				code:81182,
				imgurl:'./assets/images/code28.png',
			},{
				key:29,
				name:'北京大厦',
				code:81011,
				imgurl:'./assets/images/code29.png',
			},{
				key:30,
				name:'天津大厦',
				code:81062,
				imgurl:'./assets/images/code30.png',
			},{
				key:31,
				name:'上海大厦',
				code:81072,
				imgurl:'./assets/images/code31.png',
			},{
				key:32,
				name:'重庆大厦',
				code:81142,
				imgurl:'./assets/images/code32.png',
			},{
				key:33,
				name:'港澳台大厦',
				code:85062,
				imgurl:'./assets/images/code33.png',
			},{
				key:34,
				name:'港澳台大厦',
				code:85062,
				imgurl:'./assets/images/code33.png',
			},{
				key:35,
				parentkey:24,
				name:'内蒙古大厦—呼和浩特大厦',
				code:84012,
				imgurl:'./assets/images/code35.png',
			},{
				key:36,
				parentkey:11,
				name:'四川大厦—成都大厦',
				code:7525,
				imgurl:'./assets/images/code36.png',
			}],
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {


		return (
			<div className='zmiti-area-main-ui'>
				<div className="zmiti-area-top01"></div>
				<div className="zmiti-area-h1">请选择省份直接入驻</div>
				<div className="zmiti-area-prolist" ref='zmiti-area-prolist' style={{height:800}}>
					<div className="zmiti-area-province" style={{height:84*19+130,paddingBottom:10}}>
						<ul>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,29)}>北京大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,30)}>天津大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,4)}>河北大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,8)}>山西大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,24)}>内蒙古大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,3)}>辽宁大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,2)}>吉林大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,1)}>黑龙江大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,31)}>上海大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,7)}>江苏大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,17)}>浙江大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,16)}>安徽大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,18)}>福建大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,15)}>江西大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,6)}>山东大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,5)}>河南大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,14)}>湖北大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,13)}>湖南大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,19)}>广东大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,28)}>广西大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,23)}>海南大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,32)}>重庆大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,11)}>四川大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,21)}>贵州大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,22)}>云南大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,27)}>西藏大厦</a></li>							
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,9)}>陕西大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,10)}>甘肃大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,12)}>青海大厦</a></li>							
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,26)}>宁夏大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,25)}>新疆大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,33)}>香港大厦</a></li>							
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,34)}>澳门大厦</a></li>
							<li><a href="javascript:void(0)" onTouchTap={this.provinceDialog.bind(this,20)}>台湾大厦</a></li>
							<li className="zmiti-area-text02"><div><em>*</em>如不能顺利入驻，请添加微信号：ReadToLead，</div><div>并发送阅读大厦名称，即可加入</div></li>
							
						</ul>
						
					</div>
				</div>

				<div className="zmiti-area-dialog" style={{display:this.state.display}}>
					<div className="zmiti-area-close"><span onTouchTap={this.dialogClose.bind(this)}>×</span></div>
					<div className="zmiti-area-dialog-inner">
						<div className="zmiti-area-dialog-tit">地区：{this.state.dialogname}</div>

						<div className="zmiti-area-dialog-tabsmenu" style={{display:this.state.active}}>
							<span onTouchTap={this.provinceDialog.bind(this,24)}>全省群</span>|<span onTouchTap={this.provinceDialog.bind(this,35)}>省会群</span>
						</div>

						<div className="zmiti-area-dialog-tabsmenu" style={{display:this.state.activea}}>
							<span onTouchTap={this.provinceDialog.bind(this,11)}>全省群</span>|<span onTouchTap={this.provinceDialog.bind(this,36)}>省会群</span>
						</div>

						<div className="zmiti-area-dialog-tabscon">
							<img className="zmiti-area-dialog-imgs" src={this.state.dialogimgurl}/>
							<div className="zmiti-area-dialog-code">验证码：{this.state.dialogcode}</div>
							<div className="zmiti-area-dialog-code" style={{display:this.state.provicetip}}>请择一加入，不得重复入群</div>
						</div>
						<div className="zmiti-area-dialog-tips">提示：</div>
						<div className="zmiti-area-dialog-text">
							<ol>
								<li>长按图片识别二维码，添加机器人小管家为好友</li>
                    			<li>发送以上验证码给小管家，即可被邀请入群</li>								
							</ol>
							<p><b>注：</b>如识别二维码失败，请添加微信号：ReadToLead 并发送您要加入的阅读群名称。
                			</p>
						</div>
					</div>					
				</div>




			</div>
		);
	}


	componentDidMount() {
		let {IScroll} = this.props;

		this.scroll = new IScroll(this.refs['zmiti-area-prolist'],{
			scrollbars:true
		});

		setTimeout(()=>{
			this.scroll.refresh();
		},1000)
	}
	provinceDialog(value){
		var s = this;
		var name,text,des,imgurl,code,tip,key,parentkey;
		//console.log(value);
		var dataCode=this.state.dataCode;
		$.each(dataCode,function(i,item){
			if(item.key===value){				
				name=item.name;
				imgurl=item.imgurl;
				text=item.text;
				des=item.des;
				code=item.code;
				tip=item.tip;
				parentkey=item.parentkey;
				key=item.key;
			}
		})
		this.setState({
			dialogname:name,
			dialogtext:text,
			dialogdes:des,
			dialogtip:tip,
			dialogimgurl:imgurl,
			dialogcode:code,
			dialogkey:key,
			dialogparentkey:parentkey,
			display:'block',
		})
		if(value===24){
			this.setState({
				active:'block',
				provicetip:'block',
			})
		}else if(value===11){
			this.setState({
				activea:'block',
				provicetip:'block',
			})
		}
		s.forceUpdate();
	}
	dialogClose(){
		var s=this;
		s.setState({
			display:'none',
			active:'none',
			activea:'none',
			provicetip:'none',
			dialogname:'',
			dialogcode:0,
			dialogimgurl:'',
			dialogtext:'',
			dialogdes:'',
			dialogtip:'',
			dialogkey:'',
			dialogparentkey:'',

		})
	}
	openlink(){
		window.location="http://cn.mikecrm.com/7cDhYqu?from=groupmessage";
	}

}
export default PubCom(ZmitiAreaListApp);