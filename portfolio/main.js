const advisor = Object.create({}, {
  name: {
    value: "John Smith",
    enumerable: true
  },
  company: {
    value: "Kick Assets",
    enumerable: true,
    writable: true
  },
  specialty: {
    value: "Making money",
    enumerable: true,
    writable: true
  },
  portfolio: {
    value: [],
    writable: true,
  },

  purchase: {
    value: function(symbol, quantity, price) {
      const buy = {
        stockName: symbol,
        netChange: quantity * price
      }
      this.portfolio.push(buy);
    }
  },
  sell: {
    value: function(symbol, quantity, price) {
      const sell = {
        stockName: symbol,
        netChange: 0 - (quantity * price)
      }
      this.portfolio.push(sell);
    }
  },
  worth: {
    value: function() {
      let worth = 0;
      this.portfolio.forEach(e => {
        worth += e.netChange;        
      });
      return worth;
    }
  },

});

console.log(advisor.worth);
advisor.purchase("SAB", 50, 1.00);
console.log(advisor.worth());

advisor.purchase("SREV", 1000, .01);
console.log(advisor.worth());

advisor.sell("APP", 200, .10);
console.log(advisor.worth());

console.log(advisor.portfolio);
