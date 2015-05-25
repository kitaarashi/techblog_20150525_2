var React = require('react');
//bootstrap
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;


var Label = React.createClass({
  render:function(){
    var style1 = {
      fontFamily:'monospace',
      textAlign:'left',
      fontWeight:'bold',
      color: this.props.captionColor,
      fontSize:'11px'
    };
    var style2 = {
      fontFamily:'monospace',
      textAlign:'left',
      color:this.props.textColor,
      fontSize:this.props.fontSize1
    };
    var style3 = {
      fontFamily:'monospace',
      textAlign:'left',
      color:this.props.textColor,
      fontSize:this.props.fontSize2
    };

    return (
      <div>
    		<span style={style1}>{this.props.caption}</span><br/>
    		<span style={style2}>{this.props.text1}</span><br/>
    		<span style={style3}>{this.props.text2}</span><br/>
    	</div>
      );
  }
});

var CustomerPanel = React.createClass({
  render:function(){
    var Name = this.props.customer.LastName__c + ' ' + this.props.customer.FirstName__c + '様';
    var NameKana = this.props.customer.LastNameKana__c + ' ' + this.props.customer.FirstNameKana__c;
    return (
      <div>
            <Label caption="お名前" text1={Name} fontSize1="25px"
              text2={NameKana} />
            <hr />
            <Grid>
              <Row className='show-grid'>
                <Col sm={9}>
                  <Label caption="最終購入日" text1={this.props.LastPurchaseDate} fontSize1="35px" />
                </Col>
                <Col sm={3}>
                  <Label caption="購入回数" text1={this.props.customer.NumberOfPurchase__c} fontSize1="35px" />
                </Col>
              </Row>
              <Row className='show-grid'>
                <Col sm={4}>
                  <Label caption="会員ステータス" text1={this.props.customer.Status__c} fontSize1="15px" />
                </Col>
                <Col sm={4}>
                  <Label caption="会員カード有無" text1={this.props.customer.CardFlg__c} fontSize1="15px" />
                </Col>
                <Col sm={4}>
                  <Label caption="会員番号" text1={this.props.customer.Name} fontSize1="15px" />
                </Col>
              </Row>
              <Row className='show-grid'>
                <Col sm={12}>
                  <Label caption="ご住所" text1={this.props.customer.Address__c} fontSize1="15px" />
                </Col>
              </Row>
              <Row className='show-grid'>
                <Col sm={4}>
                  <Label caption="電話番号" text1={this.props.customer.Tel__c} fontSize1="15px" />
                </Col>
                <Col sm={8}>
                  <Label caption="メールアドレス" text1={this.props.customer.Email__c} fontSize1="15px" />
                </Col>
              </Row>
              <hr/>
              <Row className='show-grid'>
                <Col sm={12}>
                  <Label caption="メモ" text1={this.props.customer.Memo__c} fontSize1="15px" />
                </Col>
              </Row>
            </Grid>
      </div>
    );
  }
});

module.exports = CustomerPanel;
