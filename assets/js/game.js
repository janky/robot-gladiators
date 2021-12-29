//create your robot
var player_name = window.prompt("What is your robot's name?");
var player_health = 100;
var player_attack = 10;
var player_money = 10;

//log values of your robot
console.log(player_name, player_attack, player_health);

// create enemy robot
var enemy_names = ["Roborto", "Amy Android", "Robo Trumble"];
var enemy_health = 50;
var enemy_attack = 12;
console.log(enemy_names);

//initiate fight
var fight = function(enemy_name)
{
    // go through round of fighting
    while(player_health > 0 && enemy_health > 0)
    {
        //prompt player to either fight or skip the round
        var prompt_fight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

        //if player chooses to skip
        if (prompt_fight === "skip" || prompt_fight === "SKIP")
        {
            // confirm player wants to skip
            var confirm_skip = window.confirm("Are you sure you'd like to quit?")

            if(confirm_skip)
            {
                window.alert(player_name + " has chosen to skip the fight. Goodbye!");
                player_money = player_money - 10;
                console.log("player_money", player_money);
                break;
            }
        }

        //if player chooses to fight, then fight
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemy_health = enemy_health - player_attack;

        // Log a resulting message to the console so we know that it worked.
        console.log(player_name + " attacked " + enemy_name + ". " + enemy_name + " now has " + enemy_health + " health remaining.");

        //check enemy's health
        if (enemy_health <= 0)
        {
            window.alert(enemy_name + " has died.");
            break;
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
            break;
        } 
        else 
        {
            window.alert(player_name + " still has " + player_health + " health left.");
        }
        
    }
};

// function to start a new game
var start_game = function()
{
    //reset player stats
    player_health = 100;
    player_attack = 10;
    player_money = 10;

    for(var i = 0; i < enemy_names.length; i++)
    {
        if(player_health > 0)
        {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            var picked_enemy_name = enemy_names[i];
            enemy_health = 50;
            fight(picked_enemy_name);

            //if we're not at the last enemy in the array
            if (player_health > 0 && i < enemy_names.length - 1)
            {
                //ask if player wants to use the store before next round
                var store_confirm = window.confirm("The round is over, visit the shop before the next round?");

                //if yes, take them to the store function
                if (store_confirm)
                {
                    shop();
                }
            }
        }
        else
        {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    //play again
    end_game();
};

// function to end the entire game
var end_game = function()
{
    // if player is still alive, player wins!
    if (player_health > 0)
    {
        window.alert("Great job, you've survived the game! You now have a score of " + player_money + ".");
    }
    else
    {
        window.alert("You've lost your robot in battle.");
    }

    // Ask player if they'd like to play again
    var play_again_confirm = window.confirm("Would you like to play again?");

    if (play_again_confirm)
    {
        //restart game
        start_game();
    }
    else
    {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// shop function
var shop = function()
{
    //ask player what they would like to do 
    var shop_option_prompt = window.prompt("Would you like to REFILL you health, UPGRADE your attack, or LEAVE the store? Please enter 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch (shop_option_prompt)
    {
        case "REFILL": 
        case "refill": 
            if (player_money >= 7)
            {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                //increase health and decrease money
                player_health = player_health + 20;
                player_money = player_money - 7;
            }
            else
            {
                window.alert("You don't have enough money!");
            }

            break;

        case "UPGRADE":
        case "upgrade":
            if (player_money >= 7)
            {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                //increase attack and decrease money
                player_attack = player_attack + 6;
                player_money = player_money - 7;
            }
            else
            {
                window.alert("You don't have enough money!");
            }

            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            //do nothing, so function will end
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

start_game();