// Back End
function BankAccount (accountName, accountBalance){
  this.accountName = accountName;
  this.accountBalance = accountBalance;
}

BankAccount.prototype.deposit = function(moneyToAdd){
  // console.log("hello there");
  // console.log("moneyToAdd is a " + typeof moneyToAdd);
  // console.log("accountBalance is a " + typeof this.accountBalance);
  this.accountBalance += moneyToAdd;
}
BankAccount.prototype.withdraw = function(moneyToSubtract){
  this.accountBalance -= moneyToSubtract;
}

function UsrAccount (name, phone, street, city, state, account) {
  this.name = name;
  this.phone = phone;
  this.street = street;
  this.city = city;
  this.state = state;
  this.account = account;
}

UsrAccount.prototype.fullAddress = function() {
  return this.street + " " + this.city + " , " + this.state;
}

// Front End
$(function(){

  $("#createNew").click(function(){
    $("#landing").hide();
    $("#userAccountForm").fadeIn();
  });

  $("#loginExisting").click(function(){
    $("#landing").hide();
    $("#bankAccountLogin").fadeIn();
  });

  $("#userAccountForm").submit(function(){
    event.preventDefault();
    var usrName = $("#nameInput").val();
    var usrPhone = $("#phoneInput").val();
    var usrStreet = $("#streetInput").val();
    var usrCity = $("#cityInput").val();
    var usrState = $("#stateDropdown").val();
    var usrAccountName = $("#createAccountName").val();
    var usrInitialDeposit = parseFloat($("#initialDeposit").val())
    var currentUsrBankAccount = new BankAccount(usrAccountName, usrInitialDeposit);
    currentUsrAccount = new UsrAccount (usrName, usrPhone, usrStreet, usrCity, usrState, [currentUsrBankAccount]);
    $("#userAccountForm").hide();
    $("#landing").show();
    // potentially make function
  });

  $("#bankAccountForm").submit(function(){
    event.preventDefault();
    var accountLookup = $("#accountName").val();
    if (accountLookup && currentUsrAccount.account[0].accountName && accountLookup === currentUsrAccount.account[0].accountName) {
      $("#optionsDiv").show();
      $("#optionsDiv").append("<h3 id='welcome-message'>Welcome to the bank, " + currentUsrAccount.name + "</h3>");
      $("#optionsDiv").append("<h4 id='balance-message'>Your balance is: </h4>");
      $("#displayDiv").show();
      $("#displayDiv").empty();
      $("#displayDiv").append("<h3 id='balance-display'>" + currentUsrAccount.account[0].accountBalance + "</h3>");
      $("#bankAccountLogin").hide();
    }
    $("#withdrawBtn").click(function(){
      $("#moneyChanger").show();
      $("#moneyChanger").removeClass("withdrawy");
      $("#moneyChanger").removeClass("deposity");
      $("#moneyChanger").addClass("withdrawy");
    });
    $("#depositBtn").click(function(){
      $("#moneyChanger").show();
      $("#moneyChanger").removeClass("withdrawy");
      $("#moneyChanger").removeClass("deposity");
      $("#moneyChanger").addClass("deposity");
    });
    $("#balanceBtn").click(function(){
      $("#displayDiv").empty();
      $("#displayDiv").append("<h3 id='balance-display'>" + currentUsrAccount.account[0].accountBalance + "</h3>");
    });
    $("#moneyChangerForm").submit(function(){
      event.preventDefault();
      $("#moneyChanger").hide();
      // $("");
      var howMuch = parseFloat($("#howMuchInput").val());
      if ($("#moneyChanger").hasClass("withdrawy")){
        currentUsrAccount.account[0].withdraw(howMuch);
      }else if($("#moneyChanger").hasClass("deposity")){
        currentUsrAccount.account[0].deposit(howMuch);
      }
      $("#displayDiv").empty();
      $("#displayDiv").append("<h3 id='balance-display'>" + currentUsrAccount.account[0].accountBalance + "</h3>");
    });
  });


  $("#exit").click(function(){
    $("#bankAccountLogin").hide();
    $("#landing").fadeIn();
  })
});
