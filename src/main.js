'use strict';

module.exports = {
  render : function(customer){
    var React = require('react');
    var CustomerPanel = require('./panelCustomer.jsx');
    React.render(
      <CustomerPanel customer={customer} />,
      document.getElementById('content')
    );
  }
}

//var init = require('./init.js');
//init();


//$REACT.panelCustomer = {};
//$REACT.panelCustomer.render = function(customer){
//  var React = require('react');
//  var CustomerPanel = require('./customerPanel.jsx');
//  React.render(
//    <CustomerPanel customer={customer} />,
//    document.getElementById('content')
//  );
//};


/*var customer = {
  LastName__c : 'a',
  FirstName__c: 'b',
  LastNameKana__c : 'c',
  FirstNameKana__c : 'd',
  LastPurchaseDate : 'e',
  NumberOfPurchase__c : 'f',
  Status__c : 'g',
  CardFlg__c : 'h',
  Name : 'i',
  Address__c : 'j',
  Tel__c : 'k',
  Email__c : 'h',
  Memo__c : 'i'
};

$REACT.panelCustomer.render(customer);*/

//react.render(
//  <CustomerPanel customer={customer} />,
//  document.getElementById('content')
//);
