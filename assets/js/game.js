//initiate fight
var fight = function(enemy)
{
    // go through round of fighting
    while(player_info.health > 0 && enemy.health > 0)
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
                window.alert(player_info.name + " has chosen to skip the fight. Goodbye!");
                player_info.money = Math.max(0, player_info.money - 10);
                console.log("player_info.money", player_info.money);
                break;
            }
        }

        //if player chooses to fight, then fight
        //generate random damage value based on player's attack power
        var damage = random_number(player_info.attack - 3, player_info.attack);
        enemy.health = Math.max(0, enemy.health - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(player_info.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");

        //check enemy's health
        if (enemy.health <= 0)
        {
            window.alert(enemy.name + " has died.");
            break;
        }
        else 
        {                
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // generate random damage value based on enemy's attack power
        var damage = random_number(enemy.attack - 3, enemy.attack);
        player_info.health = Math.max(0, player_info.health - damage);

        // Log a resulting message to the console so we know that it worked.
        console.log(enemy.name + " attacked " + player_info.name + ". " + player_info.name + " now has " + player_info.health + " health remaining.");

        // check player's health
        if (player_info.health <= 0) 
        {
            window.alert(player_info.name + " has died!");
            break;
        } 
        else 
        {
            window.alert(player_info.name + " still has " + player_info.health + " health left.");
        }
        
    }
};

// function to start a new game
var start_game = function()
{
    //reset player stats
    player_info.reset();

    for(var i = 0; i < enemy_info.length; i++)
    {
        if(player_info.health > 0)
        {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            var picked_enemy_obj = enemy_info[i];
            picked_enemy_obj.health = random_number(40,60);
            fight(picked_enemy_obj);

            //if we're not at the last enemy in the array
            if (player_info.health > 0 && i < enemy_info.length - 1)
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
    if (player_info.health > 0)
    {
        window.alert("Great job, you've survived the game! You now have a score of " + player_info.money + ".");
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
            player_info.refill_health();
            break;

        case "UPGRADE":
        case "upgrade":
            player_info.upgrade_attack();
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

// random number function
var random_number = function(min, max)
{
    var value = Math.floor(Math.random() * (max - min + 1)) + min;

    return value;
};

//create your robot
var player_info = 
{
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money:10,
    reset: function()
    {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refill_health: function()
    {
        if (this.money >= 7)
        {
            window.alert("Refilling player's health by 20 for 7 dolloars.");
            this.health +=20;
            this.money -= 7;
        }
        else
        {
            window.alert("You don't have enough money!");
        }
    },
    upgrade_attack: function()
    {
        if (this.money >= 7)
        {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else
        {
            window.alert("You don't have enough money!");
        }
    }
};
//log values of your robot
console.log(player_info.name, player_info.attack, player_info.health, player_info.money);

// create enemy robot
var enemy_info =
[
    {
        name: "Roborto",
        attack: random_number(10, 14)
    },
    {
        name:"Amy Android",
        attack: random_number(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: random_number(10, 14)
    }
];

start_game();