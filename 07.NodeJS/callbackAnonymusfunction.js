// no need to give name to function which is passed as an argumrnt.
// that nameless function is known as Anonymous function

function show(x) // function show is accepting an argumrnt as parameter
{
    console.log("hello node....");
    x();
}


show(function() // calling show by providing a function as an argument.
{
    console.log("it's new to work with you.....");
}) // mentioning ; her is not giving any effect.