$(document).ready(function(){
	// setting all document divs to vars for easier use
	var mainContent = $("#mainContent");
	var portfolio = $("#portfolio");
	var about = $("#about");
	var homeButton = $("#mainContentLink");
	var portfolioButton = $("#portfolioLink");
	var aboutButton	= $("#aboutLink");
	var lastUpdated = $("#lastUpdated");

	portfolio.hide();
	about.hide();
	// these are the fade in fade out functions for the content
	portfolioButton.click(function(){
		if (mainContent.css("display") == "block"){
			mainContent.hide();
		}else if (about.css("display") == "block"){
			about.hide();
		}
		portfolio.fadeIn(500);
	});

	homeButton.click(function(){
		if (about.css("display") == "block"){
			about.hide();
		}else if (portfolio.css("display") == "block"){
			portfolio.hide();
		}
		mainContent.fadeIn(500);
	});

	aboutButton.click(function(){
		if (mainContent.css("display") == "block"){
			mainContent.hide();
		}else if (portfolio.css("display") == "block"){
			portfolio.hide();
		}
		about.fadeIn(500);
	});

	// this caculates how many days ago the site was updated
	var daysAgo = (((new Date).getTime() / 1000) - 1458247975) / 86400
	// append the days ago site updated number to the page
	lastUpdated.append("<p>Last updated: " + daysAgo.toFixed(0) + " days ago.</p>")

});



