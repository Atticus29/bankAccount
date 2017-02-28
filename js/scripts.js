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
    currentUsrAccount.fullAddress()
    // console.log(currentUsrAccount);
      // console.log(usrName, usrPhone,usrStreet,usrCity,usrState);
    // potentially make function
  });
  $("#bankAccountForm").submit(function(){
    event.preventDefault();

    var accountLookup = $("#accountName").val();
    // console.log(currentUsrAccount);
    // console.log(currentUsrAccount.account[0].accountName);
    // console.log(currentUsrAccount.account[0]);
    if (accountLookup === currentUsrAccount.account[0].accountName) {
      $("#optionsDiv").show();
      $("#bankAccountLogin").hide();
    }
    // console.log(currentUsrAccount);
    // console.log("usrInitialDeposit is a " + typeof usrInitialDeposit);

    // console.log("whole object is " + currentUsrBankAccount);
    $("#withdrawBtn").click(function(){
      // console.log("You want to withdraw");
      $("#moneyChanger").show();
      $("#moneyChanger").removeClass("withdrawy");
      $("#moneyChanger").removeClass("deposity");
      $("#moneyChanger").addClass("withdrawy");

      // console.log(currentUsrBankAccount.accountBalance);
    });
    $("#depositBtn").click(function(){
      // console.log("You want to deposit");
      $("#moneyChanger").show();
      $("#moneyChanger").removeClass("withdrawy");
      $("#moneyChanger").removeClass("deposity");
      $("#moneyChanger").addClass("deposity");

      // console.log(currentUsrBankAccount.accountBalance);
    });
    $("#balanceBtn").click(function(){
      // console.log("You just want to know things");
      // $("#displayDiv").show();
      $("#displayDiv").empty();
      $("#displayDiv").append("<h3>" + currentUsrAccount.account[0].accountBalance + "</h3>");
    });
    $("#moneyChangerForm").submit(function(){
      event.preventDefault();
      $("#moneyChanger").hide();
      var howMuch = parseFloat($("#howMuchInput").val());
      if ($("#moneyChanger").hasClass("withdrawy")){
        currentUsrAccount.account[0].withdraw(howMuch);
      }else if($("#moneyChanger").hasClass("deposity")){
        currentUsrAccount.account[0].deposit(howMuch);
      }
      // console.log("howMuch is a " + typeof howMuch);
      // console.log(currentUsrBankAccount.accountBalance);
    });
    // console.log(usrAccountName,usrInitialDeposit);
  });
});
