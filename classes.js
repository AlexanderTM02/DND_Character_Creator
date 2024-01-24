// Get class proficiencies
function getClassProficiencies(charClass, charLevel) {

    const proficiencyBonus = getProficiencyBonus(charLevel);

    let checkboxes;
    let classProficiencies = {};
    switch (charClass) {
        case 'fighter':
            // Get all checked checkboxes from the class skill proficiencies
            checkboxes = document.querySelectorAll('#classSkillProficiencyFighter input[type="checkbox"]:checked');
            // For each checked checkbox, add the value to the classProficiencies object
            checkboxes.forEach(checkbox => {
                // The value of the checkbox is the name of the skill
                classProficiencies[checkbox.value] = proficiencyBonus// Add the proficiency bonus to the skill;
            });

        break;
        case 'wizard':

            checkboxes = document.querySelectorAll('#classSkillProficiencyWizard input[type="checkbox"]:checked');

            checkboxes.forEach(checkbox => {
                classProficiencies[checkbox.value] = proficiencyBonus;
            });


            break;
        case 'rogue':
            
            checkboxes = document.querySelectorAll('#classSkillProficiencyRogue input[type="checkbox"]:checked');

            checkboxes.forEach(checkbox => {
                classProficiencies[checkbox.value] = proficiencyBonus;
            });

            break;
        // Add more cases for other classes
        default:
            return {};
    }
    return classProficiencies;
    
}

function getProficiencyBonus(charLevel) {

    if (charLevel >= 1 && charLevel <= 4) {
        return 2;
    } else if (charLevel >= 5 && charLevel <= 8) {
        return 3;
    } else if (charLevel >= 9 && charLevel <= 12) {
        return 4;
    } else if (charLevel >= 13 && charLevel <= 16) {
        return 5;
    } else if (charLevel >= 17 && charLevel <= 20) {
        return 6;
    }

}

function getClassFeatures(charClass){
    switch (charClass){
        case 'fighter':

            const fighter = `
            
            <p>•Fighting Style: At 1st level, a fighter gets to choose a fighting style. The fighter gains the benefits of the chosen style at 1st level and again at 6th and 10th level. The fighter must meet all the style’s prerequisites to select it.</p>
            <p>•Weapon and Armor Proficiency: A fighter is proficient with all simple and martial weapons and with all armor (heavy, light, and medium) and shields (including tower shields).</p>
            <p>•second wind: At 1st level, a fighter can heal himself once per day. As a swift action, he can heal 1d10 hit points + his fighter level. For every four levels he possesses beyond 1st, he can use this ability one additional time per day (to a maximum of four times per day at 17th level).</p>
            <p>•Maneuvers: At 1st level, a fighter gains one of the following maneuvers. He gains an additional maneuver at 2nd level and every two fighter levels thereafter. A fighter must meet a maneuver’s prerequisite to learn it. Unless otherwise noted, a maneuver can be used only once per encounter. A fighter cannot select an individual maneuver more than once.</p>


            `

            return fighter;
        break;
        case 'wizard':

            const wizard = `
            
            <p>•Arcane Casting: A wizard casts arcane spells drawn from the sorcerer/wizard spell list presented in Spell Lists. A wizard must choose and prepare his spells ahead of time.</p>
            <p>•Arcane Recovery: Once per day, a wizard can recover a number of spell levels of spells that he has prepared equal to his wizard level. He cannot recover a spell level greater than his wizard level. For example, a 4th-level wizard can recover up to two levels of spells.</p>
            <p>•Cantrips: Wizards can prepare a number of cantrips, or 0-level spells, each day, as noted on Table: Wizard under “Spells per Day.” These spells are cast like any other spell, but they are not expended when cast and may be used again.</p>
            <p>•Fireball cantrip: A wizard can cast fireball as a cantrip.
            Ranged Spell Attack: +4 to hit, targets one creature or object within 120 ft. range. Hit: 1d10 fire damage and unattended flammable objects catch on fire.
            </p>

            <p>•spell casting: A wizard casts arcane spells drawn from the sorcerer/wizard spell list presented in Spell Lists. A wizard must choose and prepare his spells ahead of time.</p>
            <p>•Cantrips known: Dancing Lights, Fire Bolt, Message<p>

            `

            return wizard;
        break;
        case 'rogue':

            const rogue = `
            
            <p>•Sneak Attack: (+1d6)</p>
            <p>•Thieves Cant: A rogue is trained to recognize secret signs and to communicate using a simple sign language of gestures and pictograms known as Thieves’ Cant. This secret language allows a rogue to make herself understood by another rogue without using words. She can also use Thieves’ Cant to leave hidden messages, such as marks scratched into a wall or trail markers.</p>
            <p>•Sneak Attack: Once per turn, deal +1d6 extra damage to one creature hit if attack with advantage using finesse or ranged weapon. Don't need advantage if an enemy of the target is within 5 feet of it, enemy isn't incapacitated, and you don't have disadvantage on attack.</p>

            `

            return rogue;
        break;
    }
}