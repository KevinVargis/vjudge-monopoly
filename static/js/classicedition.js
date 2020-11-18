var color = ["#00FF00", "#FFFF00", "#FF0000", "#000000"];
var reward = [4, 8, 12];
var stages = ["Easy", "Medium", "Hard", "Completed"]
function Square(name) {
	this.name = name;
	this.level = 0;
	this.price = reward[this.level];
	this.pricetext = this.price;
	this.color = color[this.level];
	this.owner = 0;
	this.blocked = 0;
	this.updateSquare = function()
	{
		if(this.level === 3)
		{
			this.pricetext = "All available levels of this card has been solved.";
			this.color = color[this.level];
		}
		else
		{
			this.price = reward[this.level];
			this.pricetext = this.price;
			this.color = color[this.level];
		}
	};
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	//document.getElementById("cell1name").textContent = "Mediter-ranean Avenue";

	// Add images to enlarges.
	document.getElementById("enlarge12token").innerHTML += '<img src="static/block_square.png" height="50" width="50" alt="" style="position: relative; bottom: -5px;" />';
	document.getElementById("enlarge6token").innerHTML += '<img src="static/free_hit.png" height="60" width="65" alt="" style="position: relative; bottom: -10px;" />';
	document.getElementById("enlarge18token").innerHTML += '<img src="static/jump_level.png" height="60" width="65" alt="" style="position: relative; bottom: -5px;" />';
	// document.getElementById("enlarge35token").innerHTML += '<img src="static/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	// document.getElementById("enlarge12token").innerHTML += '<img src="static/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	// document.getElementById("enlarge28token").innerHTML += '<img src="static/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Railroads are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " paid $100 for landing on Luxury Tax.");
	player[turn].pay(100, 0);

	$("#landed").show().text("You landed on Luxury Tax. Pay $100.");
}

function citytax() {
	addAlert(player[turn].name + " paid $200 for landing on City Tax.");
	player[turn].pay(200, 0);

	$("#landed").show().text("You landed on City Tax. Pay $200.");
}

var square = [];

square[0] = new Square("GO");
square[0].color="#000000";
square[0].pricetext="Collect 2 points as you pass";
square[1] = new Square("Algo1");
square[2] = new Square("Algo2");
square[3] = new Square("Algo3");
square[4] = new Square("Algo4");
square[6] = new Square("Free Hit");
square[6].pricetext="Use the card you get here to attempt a question without any penalty";
square[6].color="#000000";
square[5] = new Square("Algo5");
square[7] = new Square("Algo6");
square[8] = new Square("Algo7");
square[9] = new Square("Algo8");
square[10] = new Square("Algo1");
square[11] = new Square("Algo1");
square[12] = new Square("Block Square");
square[12].color="#000000";
square[12].pricetext="Block one attempt at solving a card held by you";
square[13] = new Square("Algo1");
square[14] = new Square("Algo1");
square[15] = new Square("Algo1");
square[16] = new Square("Algo1");
square[17] = new Square("Algo1");
square[18] = new Square("Jump Levels");
square[18].color="#000000";
square[18].pricetext="Use this to solve level of your choice for card that you land on";
square[19] = new Square("Algo1");
square[20] = new Square("Algo1");
square[21] = new Square("Algo1");
square[22] = new Square("Algo1");
square[23] = new Square("Algo1");
// square[24] = new Square("Illinois Avenue", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
// square[25] = new Square("B&O Railroad", "$200", "#FFFFFF", 200, 1);
// square[26] = new Square("Atlantic Avenue", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
// square[27] = new Square("Ventnor Avenue", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
// square[28] = new Square("Water Works", "$150", "#FFFFFF", 150, 2);
// square[29] = new Square("Marvin Gardens", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
// square[30] = new Square("Go to Jail", "Go directly to Jail. Do not pass GO. Do not collect $200.", "#FFFFFF");
// square[31] = new Square("Pacific Avenue", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
// square[32] = new Square("North Carolina Avenue", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
// square[33] = new Square("Community Chest", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
// square[34] = new Square("Pennsylvania Avenue", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
// square[35] = new Square("Short Line", "$200", "#FFFFFF", 200, 1);
// square[36] = new Square("Chance", "FOLLOW INSTRUCTIONS ON TOP CARD", "#FFFFFF");
// square[37] = new Square("Park Place", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
// square[38] = new Square("LUXURY TAX", "Pay $100", "#FFFFFF");
// square[39] = new Square("Boardwalk", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Get out of Jail, Free. This card may be kept until needed or sold.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("You have won second prize in a beauty contest. Collect $10.", function() { addamount(10, 'Community Chest');});
communityChestCards[2] = new Card("From sale of stock, you get $50.", function() { addamount(50, 'Community Chest');});
communityChestCards[3] = new Card("Life insurance matures. Collect $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[4] = new Card("Income tax refund. Collect $20.", function() { addamount(20, 'Community Chest');});
communityChestCards[5] = new Card("Holiday fund matures. Receive $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[6] = new Card("You inherit $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[7] = new Card("Receive $25 consultancy fee.", function() { addamount(25, 'Community Chest');});
communityChestCards[8] = new Card("Pay hospital fees of $100.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[9] = new Card("Bank error in your favor. Collect $200.", function() { addamount(200, 'Community Chest');});
communityChestCards[10] = new Card("Pay school fees of $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[11] = new Card("Doctor's fee. Pay $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("It is your birthday. Collect $10 from every player.", function() { collectfromeachplayer(10, 'Community Chest');});
communityChestCards[13] = new Card("Advance to \"GO\" (Collect $200).", function() { advance(0);});
communityChestCards[14] = new Card("You are assessed for street repairs. $40 per house. $115 per hotel.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Go to Jail. Go directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});


chanceCards[0] = new Card("GET OUT OF JAIL FREE. This card may be kept until needed or traded.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Make General Repairs on All Your Property. For each house pay $25. For each hotel $100.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Speeding fine $15.", function() { subtractamount(15, 'Chance');});
chanceCards[3] = new Card("You have been elected chairman of the board. Pay each player $50.", function() { payeachplayer(50, 'Chance');});
chanceCards[4] = new Card("Go back three spaces.", function() { gobackthreespaces();});
chanceCards[5] = new Card("ADVANCE TO THE NEAREST UTILITY. IF UNOWNED, you may buy it from the Bank. IF OWNED, throw dice and pay owner a total ten times the amount thrown.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Bank pays you dividend of $50.", function() { addamount(50, 'Chance');});
chanceCards[7] = new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Pay poor tax of $15.", function() { subtractamount(15, 'Chance');});
chanceCards[9] = new Card("Take a trip to Reading Rail Road. If you pass \"GO\" collect $200.", function() { advance(5);});
chanceCards[10] = new Card("ADVANCE to Boardwalk.", function() { advance(39);});
chanceCards[11] = new Card("ADVANCE to Illinois Avenue. If you pass \"GO\" collect $200.", function() { advance(24);});
chanceCards[12] = new Card("Your building loan matures. Collect $150.", function() { addamount(150, 'Chance');});
chanceCards[13] = new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("ADVANCE to St. Charles Place. If you pass \"GO\" collect $200.", function() { advance(11);});
chanceCards[15] = new Card("Go to Jail. Go Directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotojail();});
