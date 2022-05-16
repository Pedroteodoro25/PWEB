
function Retangulo(x, y) {
    this.x = x; // a marca do objeto que for criado
    this.y = y;
 
    this.calcArea = function () {
        return this.x * this.y;

    }
}   
    var area = new Retangulo(4, 5);
    //console.log(area.calcArea());
    alert(area.calcArea());



class Conta{
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }
}   

class Corrente extends Conta {
        constructor (nomeCorrentista, banco, numeroConta, saldo, saldoEspecial){
        super (nomeCorrentista, banco, numeroConta, saldo)    
        this.saldoEspecial = saldoEspecial;
    } 
        get nomeCorrentista() {
            return this._nomeCorrentista;
          }
        
          set nomeCorrentista(newNomeCorrentista) {
            this._nomeCorrentista = newNomeCorrentista;
          }

          get banco() {
            return this._banco;
          }
        
          set banco(newBanco) {
            this._banco = newBanco;
          }

          get numeroConta() {
            return this._numeroConta;
          }
        
          set numeroConta(newNumeroConta) {
            this._numeroConta = newNumeroConta;
          }

          get saldo() {
            return this._saldo;
          }
        
          set saldo(newSaldo) {
            this._saldo = newSaldo;
          }

          get saldoEspecial() {
            return this._nomeCorrentista;
          }
        
          set saldoEspecial(newSaldoEspecial) {
            this._saldoEspecial = newSaldoEspecial;
          }          
        //alert (Corrente.nomeCorrentista);           
}

class Poupança extends Conta {
    constructor (nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento){
    super (nomeCorrentista, banco, numeroConta, saldo)    
    this.juros = juros;
    this.dataVencimento = dataVencimento;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
      }
    
      set nomeCorrentista(newNomeCorrentista) {
        this._nomeCorrentista = newNomeCorrentista;
      }

      get banco() {
        return this._banco;
      }
    
      set banco(newBanco) {
        this._banco = newBanco;
      }

      get numeroConta() {
        return this._numeroConta;
      }
    
      set numeroConta(newNumeroConta) {
        this._numeroConta = newNumeroConta;
      }

      get saldo() {
        return this._saldo;
      }
    
      set saldo(newSaldo) {
        this._saldo = newSaldo;
      }

      get juros() {
        return this._juros;
      }
    
      set juros(newJuros) {
        this._juros = newJuros;
      }  

      get dataVencimento() {
        return this._dataVencimento;
      }
    
      set dataVencimento(newDataVencimento) {
        this._dataVencimento = newDataVencimento;
      }  
}