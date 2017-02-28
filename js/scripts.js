// Back End


// Front End
$(function(){
  $("#userAccountForm").submit(function(){
    event.preventDefault();
    var usrName = $("#nameInput").val();
    var usrPhone = $("#phoneInput").val();
    var usrStreet = $("#streetInput").val();
    var usrCity = $("#cityInput").val();
    var usrState = $("#stateDropdown").val();
    console.log(usrName, usrPhone,usrStreet,usrCity,usrState);
    // potentially make function
  });
  $("#bankAccountForm").submit(function(){
    event.preventDefault();
    $("#optionsDiv").show();
    var usrAccountName = $("#accountName").val();
    var usrInitialDeposit = $("#initialDeposit").val();
    $("#withdrawBtn").click(function(){
      console.log("You want to withdraw");
    });
    $("#depositBtn").click(function(){
      console.log("You want to deposit");
    });
    $("#balanceBtn").click(function(){
      console.log("You just want to know things");
    });
    console.log(usrAccountName,usrInitialDeposit);
  });
});
