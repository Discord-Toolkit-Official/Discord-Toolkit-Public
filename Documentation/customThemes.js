/*
//E.g Inject
injecttheme("TestId", ".darktheme { css: var ; css }") 
injecttheme("TestId", ".dark-theme { display: none }") 

//uninject
uninjecttheme("TestId") 
uninjecttheme("Testid") 
*/

//E.g Inject (Don't Edit "CTH")
function customtheme () {
injecttheme("CTH", ".tag { css: css }") 
injecttheme("CTH", ".tag { css: css }") 
}

//E.g Eject (We've done this for you don't worry)
function ejectcustheme () {
uninjecttheme("CTH") 
uninjecttheme("CTH") 
}

//We have added this code into the toolkit you just need to edit it.
