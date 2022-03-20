var snippets = [];
var monday = '';
var fullPath = '';
var fileName = '';

$(document).ready(function() {
	// if the list exists, read it from local
	// storage and add it to the table.
	snippets = getSnippets();
    snippets.forEach(addToTable);
    monday = calcMonday();

	clearForm();
});

// Get an existing list from local storage
function getSnippets() {
	var snipList = [];

    // Temporary snippets list for testing purposes.
    snipList.push('Created VB SnipMan');
    snipList.push('Created JavaScript SnipMan');
    snipList.push('Creating jQuery back end.');

    // TODO: Figure out how to load from a local file.

    // Return the list of snippts to the caller.
	return snipList;
}

// Add a new task to the table
function addToTable(aSnippet) {
	var tableRow = '<tr><td>' + aSnippet + '</td></tr>';
	$("#snippet-list").append(tableRow);
}

// Add a new task to the in-memory list and save it
function addToList(aSnippet) {
	// Add new task to list
	snippets.push(aSnippet);

	// Save the contents of the list
    // TODO: Figure out how to save to a local file.
	// setTodoList();
}

$('#add-snippet').click(function() {
	if($("#new-snippet").val() == "") {
		alert("Enter a value for the snippet first!");
	} else {
        var newSnippet = $("#new-snippet").val();
        addToList(newSnippet);
        addToTable(newSnippet);

		// Now that we're done, clear the form.
		clearForm();
	}
});

$("#clear-form").click(function() {
    clearForm();
});

function clearForm() {
    $('#new-snippet').val('');
}

function calcMonday() {
    var currentDate = Date.now;
    var LastMonday = currentDate.toString();
}