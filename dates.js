// Aujourd'hui 
function space (){
    console.log("");
    console.log("");
}
space()

var date = new Date()

const days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi']

const month = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','September','Octobre','Novembre','Décembre']

var newDay = days[date.getDay()];

var newMonth = month[date.getMonth()]

function whatIsDayToday (date){
        console.log(`Aujourd'hui nous sommes ${date}`);
}
whatIsDayToday(newDay)
space()

// Mois Courant 

function whatMonthIsIt (date){
    console.log(`Aujourd'hui nous sommes au mois de ${date}`);
}
whatMonthIsIt(newMonth)
space()

// Format 

function formatDate(urDate){
    var Isplit = urDate.split('-'&&'/')
    Isplit.reverse()
    console.log(Isplit.join("-"&&"/"));
}
formatDate('05/12/2000')
space();

// Age 

function calculateAge (age){
    var aNewDate = new Date(age)
    var theAge = aNewDate.getFullYear()
    var theYear = date.getFullYear()
    console.log(`Votre age est ${theYear - theAge}ans`);
    
}   
calculateAge('2001/10/28')

// Bonus 

