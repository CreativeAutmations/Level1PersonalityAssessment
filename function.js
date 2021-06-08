var QualitySet = [];

var element = {};
element.qualities = []; element.name = "A";
element.qualities.push("Active");
element.qualities.push("Variety");
element.qualities.push("Sports ");
element.qualities.push("Opportunities");
element.qualities.push("Flexible");
element.qualities.push("Spontaneous ");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "E";
element.qualities.push("Curious");
element.qualities.push("Ideas");
element.qualities.push("Questions ");
element.qualities.push("Knowledge");
element.qualities.push("Problem Solver");
element.qualities.push("Conceptual");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "I";
element.qualities.push("Helpful");
element.qualities.push("Trustworthy");
element.qualities.push("Loyal");
element.qualities.push("Conservative ");
element.qualities.push("Dependable");
element.qualities.push("Organized");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "M";
element.qualities.push("Follow Rules");
element.qualities.push("Useful");
element.qualities.push("SaveMoney ");
element.qualities.push("Concerned");
element.qualities.push("Procedural");
element.qualities.push("Cooperative");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "Q";
element.qualities.push("Puzzles ");
element.qualities.push("Seeking Info");
element.qualities.push("Making Sense");
element.qualities.push("Rational");
element.qualities.push("Principled ");
element.qualities.push("Philosophical ");
QualitySet.push(element);

var element = {};
element.qualities = []; element.name = "B";
element.qualities.push("Organized");
element.qualities.push("Planned");
element.qualities.push("Neat");
element.qualities.push("Parental");
element.qualities.push("Traditional ");
element.qualities.push("Responsible");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "F";
element.qualities.push("Caring");
element.qualities.push("People Oriented ");
element.qualities.push("Unique");
element.qualities.push("Empathetic");
element.qualities.push("Feelings");
element.qualities.push(" Communicative");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "J";
element.qualities.push("Kind");
element.qualities.push("Understanding ");
element.qualities.push("Giving");
element.qualities.push("Devoted");
element.qualities.push("Warm ");
element.qualities.push("Poetic");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "N";
element.qualities.push("Active");
element.qualities.push("Free");
element.qualities.push("Winning");
element.qualities.push("Daring");
element.qualities.push("Impulsive");
element.qualities.push("Risk Taker");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "R";
element.qualities.push("Social Causes ");
element.qualities.push("Happy Endings ");
element.qualities.push("Easy Going");
element.qualities.push("Approachable ");
element.qualities.push("Affectionate ");
element.qualities.push("Sympathetic");
QualitySet.push(element);

var element = {};
element.qualities = []; element.name = "C";
element.qualities.push("Warm");
element.qualities.push("Helpful");
element.qualities.push("Friends");
element.qualities.push("Authentic ");
element.qualities.push("Harmonious ");
element.qualities.push("Compassionate");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "G";
element.qualities.push("Orderly ");
element.qualities.push("On-time ");
element.qualities.push("Honest ");
element.qualities.push("Stable ");
element.qualities.push("Sensible ");
element.qualities.push("Dependable");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "K";
element.qualities.push("Playful");
element.qualities.push("Quick");
element.qualities.push("Adventurous");
element.qualities.push("Open Minded ");
element.qualities.push("Confrontative");
element.qualities.push("Independent");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "O";
element.qualities.push("Sharing");
element.qualities.push("Getting Along ");
element.qualities.push("Tender");
element.qualities.push("Inspirational");
element.qualities.push("Dramatic");
element.qualities.push("Feelings");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "S";
element.qualities.push("Exciting");
element.qualities.push("Lively");
element.qualities.push("Hands On");
element.qualities.push("Skillful");
element.qualities.push("Courageous");
element.qualities.push("On Stage");
QualitySet.push(element);

var element = {};
element.qualities = []; element.name = "D";
element.qualities.push("Learning");
element.qualities.push("Science ");
element.qualities.push("Quiet");
element.qualities.push("Versatile ");
element.qualities.push("Inventive ");
element.qualities.push("Competent");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "H";
element.qualities.push("Action");
element.qualities.push("Challenges ");
element.qualities.push("Competitive ");
element.qualities.push("Impetuous");
element.qualities.push("");
element.qualities.push("");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "L";
element.qualities.push("Independent ");
element.qualities.push("Competent ");
element.qualities.push("Why Questions ");
element.qualities.push("Exploring");
element.qualities.push("Theoretical ");
element.qualities.push("Ingenious");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "P";
element.qualities.push("Thinking");
element.qualities.push("Solving Problems");
element.qualities.push("Perfectionistic ");
element.qualities.push("Determined ");
element.qualities.push("Complex ");
element.qualities.push("Composed");
QualitySet.push(element);
var element = {};
element.qualities = []; element.name = "T";
element.qualities.push("Pride");
element.qualities.push("Tradition");
element.qualities.push("Do Things Right ");
element.qualities.push("Conventional ");
element.qualities.push("Orderly");
element.qualities.push("Careful");
QualitySet.push(element);

var n = 0;
for( n = 0 ; n < QualitySet.length ; n++) 
{
    var element = QualitySet[n];
    element.newqualities = [];
    for( m = 0 ; m < element.qualities.length ; m++) 
    {
        var inData = {};
        inData.qname = element.qualities[m];
        element.newqualities.push(inData);        
    }
}



function ShowTest()
{
    $("#explanation").hide();
    $("#element_container").hide();
    
    var dataForelementTemplate = { "qualities_container" : QualitySet };
    var elements_html = Mustache.render(element_template, dataForelementTemplate);
    document.getElementById("element_container").innerHTML = elements_html;
    $("#element_container").show();
    $('#element_container').scrollTop();
}

function ShowResults()
{
    var RED = ["A", "H" , "K" , "N" , "S"];
    var GREEN = ["D", "E" , "L" , "P" , "Q"];
    var BLUE = ["C", "F" , "O" , "J" , "R"];
    var YELLOW = ["B", "G" , "I" , "M" , "T"];

    var color_groups = [];
    color_groups.push( {"code": "red" , "values" : RED});
    color_groups.push( {"code": "green" , "values" : GREEN});
    color_groups.push( {"code": "blue" , "values" : BLUE});
    color_groups.push( {"code": "yellow" , "values" : YELLOW});

    var result_data = {};
    result_data.red = 0;
    result_data.green = 0;
    result_data.blue = 0;
    result_data.yellow = 0;

    var i;
    var j;
    for (i = 0; i < color_groups.length; i++) 
    {
        code = color_groups[i].code;
        for (j = 0; j < color_groups[i].values.length; j++)
        {
            if ( value < 1 )
            {
                alert("Please provide your assessment for all sections");
                return;
            } 
            var boxid  = color_groups[i].values[j];
            var value =  $("#" + boxid).val();
            result_data[code] += parseInt(value);
        } 
    }

    var results_html = Mustache.render(result_template, result_data);

    $("#explanation").show();
    document.getElementById("results").innerHTML = results_html;
    document.getElementById("element_container").innerHTML = "";
}
