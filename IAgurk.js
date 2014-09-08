var foods = [];
function addFood(name, data)
{
	var food = new Object();
	food["name"] = name;
	food["data"] = data;
	foods[foods.length] = food;
}

function makeData(name, metric)
{
	var o = new Object();
	o["name"] = name;
	o["metric"] = metric;
	return o;
}

addFood("Cucumber", [makeData("unit", 1), makeData("cm", 30)]);


function fillLists()
{
	var options;
	for(var i = 0; i < foods.length; i++)
	{
		var name = foods[i]["name"];
		options += "<option id='Food"+name+"'value='"+name+"'>" + name + "</options>"
	}
	document.getElementById("foodSelect").innerHTML=options;
	
	updateValueLists();
}

function updateValueLists()
{
	var options;
	var selection = document.getElementById("foodSelect").selectedIndex;
	for(var j = 0; j < foods[selection]["data"].length; j++)
	{
		var name = foods[selection]["data"][j]["name"];
		options += "<option id='metric_"+name+"'value='"+name+"'>" + name + "</options>"
	}
	document.getElementById("metricSelect1").innerHTML=options;
	document.getElementById("metricSelect2").innerHTML=options;
}

function calc()
{
	var valueIn = parseFloat(document.getElementById("valueNumber1").value);
	var food = foods[document.getElementById("foodSelect").selectedIndex];
	var valueTypeIn = food["data"][document.getElementById("metricSelect1").selectedIndex];
	var valueTypeOut = food["data"][document.getElementById("metricSelect2").selectedIndex];
	
	document.getElementById("valueNumber2").value = valueIn / valueTypeIn["metric"] * valueTypeOut["metric"];
}

function switc()
{
	var val1 = document.getElementById("valueNumber1").value;
	var valType1 = document.getElementById("metricSelect1").selectedIndex;
	
	document.getElementById("valueNumber1").value = document.getElementById("valueNumber2").value;
	document.getElementById("metricSelect1").selectedIndex = document.getElementById("metricSelect2").selectedIndex;
	
	document.getElementById("valueNumber2").value = val1;
	document.getElementById("metricSelect2").selectedIndex = valType1;
}
