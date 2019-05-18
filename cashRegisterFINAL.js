//CASH REGISTER FINAL VERSION
//JavaScript Algorithms and Data Structures Projects: Cash Register
/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (DOLLAR)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)*/

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  change = change.toFixed(2);
  var unitary = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  var tipoDeMoedas = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
  var totals;
  var valor = [];
  var copiaArgs = Array.prototype.slice.call(arguments[2]);
  var reversed = copiaArgs.slice().reverse()
  var quantiaQueTemosDeCadaNota = [];
  var quantiaCadaNotaRev = [];
  var quantasNotasTemosDeCadaValor;
  var quantasNotasDeCada = [];
  var ob = {};

  Object.defineProperty(ob, 'status', {
    enumerable: true,
    configurable: true,
    value: 0
  });
  Object.defineProperty(ob, 'change', {
    enumerable: true,
    configurable: true,
    value: 'change'
  });

  for (var k in copiaArgs) {
    quantiaQueTemosDeCadaNota.push(copiaArgs[k][1]);
    quantiaCadaNotaRev = quantiaQueTemosDeCadaNota.slice();
    valor.push(copiaArgs[k][1]);
  }
  totals = valor.reduce((ac, next) => ac + next).toFixed(2);
  quantiaCadaNotaRev.reverse();

  for (var n in quantiaCadaNotaRev) {
    for (var m = 0; m < unitary.length; m++) {
      quantasNotasTemosDeCadaValor = Math.ceil(quantiaCadaNotaRev[n] / unitary[n]);
    }
    quantasNotasDeCada.push(quantasNotasTemosDeCadaValor);
  }
  var notasPorValor = quantasNotasDeCada.slice();
  var unit = unitary.slice();
  //console.log(quantasNotasDeCada)//1,3,2,11,90,17,31,41,101
  //console.log(quantasNotasDeCada)//1,3,2,11,90,17,31,41,101
  //console.log(unitary)//100,20,10,5,1,0.25,0.1,0.05,0.01

  var numMoedasNecessarias = 0; //PODEMOS TE-LAS, OU NAO, VAMOS VER A SGUIR
  var unilen = unitary.length;
  var qtylen = quantasNotasDeCada.length;
  var moedasUsadas = [];
  for (var b = 0; b < unilen; b++) {
    for (var t = 0; t < qtylen; t++) {
      var valorUnitarioMoedas = unitary.shift()
      var quantidadeRealMoedas = quantasNotasDeCada.shift();
      numMoedasNecessarias = Math.floor(change / valorUnitarioMoedas);

      if (quantidadeRealMoedas < numMoedasNecessarias) { // TIRAR TANTO QUANTO FOR POSSIVEL DE CADA MOEDA
        change = parseFloat(change - valorUnitarioMoedas * quantidadeRealMoedas).toFixed(2);
        moedasUsadas.push(quantidadeRealMoedas);
      }
      if (quantidadeRealMoedas > numMoedasNecessarias) {
        change = parseFloat(change - (valorUnitarioMoedas * (Math.floor(change / valorUnitarioMoedas)))).toFixed(2)
        moedasUsadas.push(numMoedasNecessarias);
      }
    }
  }
  //multiplicar quantidade efetiva de moedas usadas de cada valor pelo seu valor unitario:
  var montanteParaColocarNoArrayFinal = [];
  for (var u in unit) {
    for (var d in moedasUsadas) {
    }
    montanteParaColocarNoArrayFinal.push(unit[u] * moedasUsadas[u]);
  }
  //console.log(montanteParaColocarNoArrayFinal.reverse())
  var finale = [];
  var temp = [];

  for (var f in tipoDeMoedas) {
    for (var w in montanteParaColocarNoArrayFinal) {
    }
    temp.push(tipoDeMoedas[f], montanteParaColocarNoArrayFinal[f])
    finale.push(temp);
    temp = [];
  }
  finale = finale.filter(function (elem, index) {

    if (finale[index][1] != 0) {
      // console.log(finale[index])
      return finale;
    }
  });

  if (change == totals) {
    Object.defineProperty(ob, 'status', {
      value: 'CLOSED'
    });
    Object.defineProperty(ob, 'change', {
      value: copiaArgs
    });
    console.log("CLOSED");
    return ob;
  }

  var inferiores = [];
  var quantasSao = [];
  var sum;
  //calcula quantas notas ha q valem menos do q o troco

  for (var v in unitary) {
    if (change > unitary[v]) {
      inferiores.push(unitary[v]);
      quantasSao.push(quantasNotasDeCada[v]);
      //console.log(inferiores)//0.25,0.1,0.05,0.01
    }
  }
  // console.log(quantasSao, inferiores);
  var trocoAtual = 0;
  var mult;
  for (var h in quantasSao) {
    mult = quantasSao[h] * inferiores[h];
    //console.log(mult)
    // console.log(quantasSao[h], inferiores[h]);
    trocoAtual += mult;
  }
  //console.log(trocoAtual.toFixed(2))
  if (trocoAtual < change) {
    Object.defineProperty(ob, 'status', {
      value: 'INSUFFICIENT_FUNDS'
    });
    Object.defineProperty(ob, 'change', {
      value: []
    });
    console.log("INSUFFICIENT_FUNDS")
    return ob;
  }
  if (change < totals) {
    Object.defineProperty(ob, 'status', {
      value: 'OPEN'
    });
    Object.defineProperty(ob, 'change', {
      value: finale
    });
    console.log(ob);
    return ob;
  }
}
checkCashRegister(110, 200, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 100]]);