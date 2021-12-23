//create your robot
var player_name = window.prompt("What is your robot's name?");
var player_health = 100;
var player_attack = 10;

//log values of your robot
console.log(player_name, player_attack, player_health);

// create enemy robot
var enemy_name = "Roborto";
var enemy_health = 50;
var enemy_attack = 12;

//initiate fight
var fight = function()
{
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemy_health = enemy_health - player_attack;

    // Log a resulting message to the console so we know that it worked.
    console.log(player_name + " attacked " + enemy_name + ". " + enemy_name + " now has " + enemy_health + " health remaining.");

    //check enemy's health
    if (enemy_health <= 0)
    {
        window.alert(enemy_name + "has died.");
    }
    else 
    {
        window.alert(enemy_name + " still has " + enemy_health + " health left.");
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    player_health = player_health - enemy_attack;

    // Log a resulting message to the console so we know that it worked.
    console.log(enemy_name + " attacked " + player_name + ". " + player_name + " now has " + player_health + " health remaining.");

    // check player's health
    if (player_health <= 0) 
    {
        window.alert(player_name + " has died!");
    } 
    else 
    {
        window.alert(player_name + " still has " + player_health + " health left.");
    }
};

fight();