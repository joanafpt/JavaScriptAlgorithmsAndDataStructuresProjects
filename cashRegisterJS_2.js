//JavaScript Algorithms and Data Structures Projects: Cash Register

function checkCashRegister(price, cash, cid) {
  var unitary = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  var actualValuesInCashRegister = [];
  var change;
  change = cash - price;
  var totalInCashRegister;
  var values;

  actualValuesInCashRegister = cid.reverse().map(function (elem, index) {
    values = elem[1];
    return values;
  });

  totalInCashRegister = actualValuesInCashRegister.reduce(function (ac, next) {
    return ac + next;
  }).toFixed(2);

  var obj = {};

  obj['status'] = 0;
  obj['change'] = 'change';

  if (totalInCashRegister == change) {
    obj['status'] = 'CLOSED';
    obj['change'] = cid.reverse();
    return obj;
  }
  if (totalInCashRegister < change) {
    obj['status'] = 'INSUFFICIENT_FUNDS';
    obj['change'] = [];
    return obj;
  }

  var minors = [];
  var totalMinors;
  for (var t in cid) {
    if (cid[t][1] < change) {
      minors.push(cid[t][1])
      totalMinors = minors.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      });
    }
  }
  if (totalMinors < change) {
    obj['status'] = 'INSUFFICIENT_FUNDS';
    obj['change'] = [];
    return obj;
  }

  var quantityOfCoinsAndBillsOfEachAmmount = [];
  for (var i in unitary) {
    for (var j in actualValuesInCashRegister) {
    }
    quantityOfCoinsAndBillsOfEachAmmount.push(Math.ceil(actualValuesInCashRegister[i] / unitary[i]));
  }
  var y = [];
  var changeToDeliver = 0;
  for (var k in actualValuesInCashRegister) {
    for (var f in quantityOfCoinsAndBillsOfEachAmmount) {
    }
    var valoresReais = actualValuesInCashRegister.slice(); // 100 60 20 55 90 4.25 3.1 2.05  1.01
    var quantidadeMoedas = quantityOfCoinsAndBillsOfEachAmmount.slice();//1,3,2,11,90,17,31,41,101
    var unit = unitary.slice();//100,20,10,5,1,0.25,0.1,0.05,0.01

    while (valoresReais[k] >= unit[k]) {
      y.push(unit[k]);
      valoresReais[k] = valoresReais[k] - unit[k];
    }
  }

  //dealing with imprecision
  var billsForChange = [];
  for (var h in y) {
    var changeToDeliverPrevision = ((changeToDeliver * 100 + y[h] * 100)).toFixed(0);
    changeToDeliverPrevision = changeToDeliverPrevision / 100;
    if (changeToDeliverPrevision <= change) {
      billsForChange.push(y[h])
      changeToDeliver = changeToDeliverPrevision;
      // console.log(changeToDeliver, "ok", change) // 20 , 40 , 60 , 70, 80, 85, 90, 95, 96, 96.25, 96.5, 96.6
      96.69999999999999, 96.71, 96.72, 96.73
    }
  }
  var hundred = [];
  var hundredF = ["ONE HUNDRED"];
  var twenty = [];
  var twentyF = ["TWENTY"];
  var ten = [];
  var tenF = ["TEN"];
  var five = [];
  var fiveF = ["FIVE"];
  var one = [];
  var oneF = ["ONE"];
  var quarter = [];
  var quarterF = ["QUARTER"];
  var dime = [];
  var dimeF = ["DIME"];
  var nickel = [];
  var nickelF = ["NICKEL"];
  var penny = [];
  var pennyF = ["PENNY"];
  var theLast = [];

  for (var b in billsForChange) {
    while (billsForChange[b] === 100) {
      var hund = billsForChange.shift();
      hundred.push(hund);
      var qtyHund = (hund * hundred.length);
    }

    while (billsForChange[b] === 20) {
      var tw = billsForChange.shift()
      twenty.push(tw);
      var qtyTw = (tw * twenty.length); // 60
    }

    while (billsForChange[b] === 10) {
      var tn = billsForChange.shift();
      ten.push(tn);
      var qtyTen = (tn * ten.length);
    }
    while (billsForChange[b] === 5) {
      var fv = billsForChange.shift();
      five.push(fv);
      var qtyFv = (fv * five.length);
    }
    while (billsForChange[b] === 1) {
      var on = billsForChange.shift();
      one.push(on);
      var qtyOn = (on * one.length);
    }
    while (billsForChange[b] === 0.25) {
      var quart = billsForChange.shift();
      quarter.push(quart);
      var qtyQuart = (quart * quarter.length);
    }
    while (billsForChange[b] === 0.10) {
      var dim = billsForChange.shift();
      dime.push(dim);
      var qtyDime = (dim * quarter.length);
    }
    while (billsForChange[b] === 0.05) {
      var nick = billsForChange.shift();
      nickel.push(nick);
      var qtyNickel = (nick * nickel.length);
    }
    while (billsForChange[b] === 0.01) {
      var pen = billsForChange.shift();
      penny.push(pen);
      var qtyPenny = (pen * penny.length);
    }

  }

  hundredF.push(qtyHund);
  twentyF.push(qtyTw);
  tenF.push(qtyTen);
  fiveF.push(qtyFv);
  oneF.push(qtyOn);
  quarterF.push(qtyQuart);
  dimeF.push(qtyDime);
  nickelF.push(qtyNickel);
  pennyF.push(qtyPenny);
  theLast.push(hundredF, twentyF, tenF, fiveF, oneF, quarterF, dimeF, nickelF, pennyF);

  var moneyNameAndAmount = [];
  for (var w in theLast) {
    if (theLast[w][1] != undefined) {
      moneyNameAndAmount.push(theLast[w]);
    }
  }
  if (totalInCashRegister > change) {
    obj['status'] = 'OPEN';
    obj['change'] = moneyNameAndAmount;
    return obj;
  }
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);