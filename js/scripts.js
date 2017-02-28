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

// Front End
$(function(){
  $("#userAccountForm").submit(function(){
    event.preventDefault();
    var usrName = $("#nameInput").val();
    var usrPhone = $("#phoneInput").val();
    var usrStreet = $("#streetInput").val();
    var usrCity = $("#cityInput").val();
    var usrState = $("#stateDropdown").val();
    // console.log(usrName, usrPhone,usrStreet,usrCity,usrState);
    // potentially make function
  });
  $("#bankAccountForm").submit(function(){
    event.preventDefault();
    $("#optionsDiv").show();
    $("#bankAccountLogin").hide();
    var usrAccountName = $("#accountName").val();
    var usrInitialDeposit = parseFloat($("#initialDeposit").val());
    // console.log("usrInitialDeposit is a " + typeof usrInitialDeposit);
    var currentUsrBankAccount = new BankAccount(usrAccountName, usrInitialDeposit);
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
      $("#displayDiv").append("<h3>" + currentUsrBankAccount.accountBalance + "</h3>");
    });
    $("#moneyChangerForm").submit(function(){
      event.preventDefault();
      $("#moneyChanger").hide();
      var howMuch = parseFloat($("#howMuchInput").val());
      if ($("#moneyChanger").hasClass("withdrawy")){
        currentUsrBankAccount.withdraw(howMuch);
      }else if($("#moneyChanger").hasClass("deposity")){
        currentUsrBankAccount.deposit(howMuch);
      }
      // console.log("howMuch is a " + typeof howMuch);
      // console.log(currentUsrBankAccount.accountBalance);
    });
    // console.log(usrAccountName,usrInitialDeposit);
  });
});
