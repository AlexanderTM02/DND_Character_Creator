function generateCharacter() {
    // Get form values
    const charName = document.getElementById('charName').value;
    const charRace = document.getElementById('charRace').value;
    const charClass = document.getElementById('charClass').value;
    const charAllignment = document.getElementById('charAllignment').value;
    const charBackground = document.getElementById('charBackground').value;
    const charLevel = parseInt(document.getElementById('charLevel').value, 10);

    const charStatStrength = parseInt(document.getElementById('charStatStrength').value, 10);
    const charStatDexterity = parseInt(document.getElementById('charStatDexterity').value, 10);
    const charStatConstitution = parseInt(document.getElementById('charStatConstitution').value, 10);
    const charStatIntelligence = parseInt(document.getElementById('charStatIntelligence').value, 10);
    const charStatWisdom = parseInt(document.getElementById('charStatWisdom').value, 10);
    const charStatCharisma = parseInt(document.getElementById('charStatCharisma').value, 10);

   // Use functions from races.js and classes.js
   const raceStats = getRaceStats(charRace);
   const classStats = getClassStats(charClass);
    
    // Calculate final stats based on race, class, and level
    const finalStats = {
        strength: (raceStats.strength || 0) + (classStats.strength || 0) + charStatStrength,
        dexterity: (raceStats.dexterity || 0) + (classStats.dexterity || 0) + charStatDexterity,
        constitution: (raceStats.constitution || 0) + (classStats.constitution || 0) + charStatConstitution,
        intelligence: (raceStats.intelligence || 0) + (classStats.intelligence || 0) + charStatIntelligence,
        wisdom: (raceStats.wisdom || 0) + (classStats.wisdom || 0) + charStatWisdom,
        charisma: (raceStats.charisma || 0) + (classStats.charisma || 0) + charStatCharisma,
    };

    const abilityScoreModifiers = {
        strength: getAbilityScoreModifier(finalStats.strength),
        dexterity: getAbilityScoreModifier(finalStats.dexterity),
        constitution: getAbilityScoreModifier(finalStats.constitution),
        intelligence: getAbilityScoreModifier(finalStats.intelligence),
        wisdom: getAbilityScoreModifier(finalStats.wisdom),
        charisma: getAbilityScoreModifier(finalStats.charisma),
    };

    const skillModifiers = {
        acrobatics: abilityScoreModifiers.dexterity,
        animalHandling: abilityScoreModifiers.wisdom,
        arcana: abilityScoreModifiers.intelligence,
        athletics: abilityScoreModifiers.strength,
        deception: abilityScoreModifiers.charisma,
        history: abilityScoreModifiers.intelligence,
        insight: abilityScoreModifiers.wisdom,
        intimidation: abilityScoreModifiers.charisma,
        investigation: abilityScoreModifiers.intelligence,
        medicine: abilityScoreModifiers.wisdom,
        nature: abilityScoreModifiers.intelligence,
        perception: abilityScoreModifiers.wisdom,
        performance: abilityScoreModifiers.charisma,
        persuasion: abilityScoreModifiers.charisma,
        religion: abilityScoreModifiers.intelligence,
        sleightOfHand: abilityScoreModifiers.dexterity,
        stealth: abilityScoreModifiers.dexterity,
        survival: abilityScoreModifiers.wisdom,
    };

    // Generate character summary
    const characterSummary = `
    
        <h2>Character Summary</h2>
        <p><strong>Name:</strong> ${charName}<br>
        <strong>Race:</strong> ${charRace}<br>
        <strong>Allignment:</strong> ${charAllignment}<br>
        <strong>Background:</strong> ${charBackground}<br>
        <strong>Class:</strong> ${charClass}<br>
        <strong>Level:</strong> ${charLevel}<br>
        
        <br><strong>Ability Scores & Abilities:</strong></p>
        <ul>
            <li>Strength: ${finalStats.strength} (${abilityScoreModifiers.strength >= 0 ? '+' : ''}${abilityScoreModifiers.strength})</li>
            <li>Dexterity: ${finalStats.dexterity} (${abilityScoreModifiers.dexterity >= 0 ? '+' : ''}${abilityScoreModifiers.dexterity})</li>
            <li>Constitution: ${finalStats.constitution} (${abilityScoreModifiers.constitution >= 0 ? '+' : ''}${abilityScoreModifiers.constitution})</li>
            <li>Intelligence: ${finalStats.intelligence} (${abilityScoreModifiers.intelligence >= 0 ? '+' : ''}${abilityScoreModifiers.intelligence})</li>
            <li>Wisdom: ${finalStats.wisdom} (${abilityScoreModifiers.wisdom >= 0 ? '+' : ''}${abilityScoreModifiers.wisdom})</li>
            <li>Charisma: ${finalStats.charisma} (${abilityScoreModifiers.charisma >= 0 ? '+' : ''}${abilityScoreModifiers.charisma})</li>
        </ul>

        <br><strong>Skills:</strong></p>
        <ul>
            <li>Acrobatics: ${skillModifiers.acrobatics >= 0 ? '+' : ''}${skillModifiers.acrobatics}</li>
            <li>Animal Handling: ${skillModifiers.animalHandling >= 0 ? '+' : ''}${skillModifiers.animalHandling}</li>
            <li>Arcana: ${skillModifiers.arcana >= 0 ? '+' : ''}${skillModifiers.arcana}</li>
            <li>Athletics: ${skillModifiers.athletics >= 0 ? '+' : ''}${skillModifiers.athletics}</li>
            <li>Deception: ${skillModifiers.deception >= 0 ? '+' : ''}${skillModifiers.deception}</li>
            <li>History: ${skillModifiers.history >= 0 ? '+' : ''}${skillModifiers.history}</li>
            <li>Insight: ${skillModifiers.insight >= 0 ? '+' : ''}${skillModifiers.insight}</li>
            <li>Intimidation: ${skillModifiers.intimidation >= 0 ? '+' : ''}${skillModifiers.intimidation}</li>
            <li>Investigation: ${skillModifiers.investigation >= 0 ? '+' : ''}${skillModifiers.investigation}</li>
            <li>Medicine: ${skillModifiers.medicine >= 0 ? '+' : ''}${skillModifiers.medicine}</li>
            <li>Nature: ${skillModifiers.nature >= 0 ? '+' : ''}${skillModifiers.nature}</li>
            <li>Perception: ${skillModifiers.perception >= 0 ? '+' : ''}${skillModifiers.perception}</li>
            <li>Performance: ${skillModifiers.performance >= 0 ? '+' : ''}${skillModifiers.performance}</li>
            <li>Persuasion: ${skillModifiers.persuasion >= 0 ? '+' : ''}${skillModifiers.persuasion}</li>
            <li>Religion: ${skillModifiers.religion >= 0 ? '+' : ''}${skillModifiers.religion}</li>
            <li>Sleight of Hand: ${skillModifiers.sleightOfHand >= 0 ? '+' : ''}${skillModifiers.sleightOfHand}</li>
            <li>Stealth: ${skillModifiers.stealth >= 0 ? '+' : ''}${skillModifiers.stealth}</li>
            <li>Survival: ${skillModifiers.survival >= 0 ? '+' : ''}${skillModifiers.survival}</li>
            
        </ul>
    `;

    // Display character summary
    document.getElementById('characterResult').innerHTML = characterSummary;
}

function getAbilityScoreModifier(score) {
    if (score === 1) {
        return -5;
    } else if (score >= 2 && score <= 3) {
        return -4;
    } else if (score >= 4 && score <= 5) {
        return -3;
    } else if (score >= 6 && score <= 7) {
        return -2;
    } else if (score >= 8 && score <= 9) {
        return -1;
    } else if (score >= 10 && score <= 11) {
        return 0;
    } else if (score >= 12 && score <= 13) {
        return 1;
    } else if (score >= 14 && score <= 15) {
        return 2;
    } else if (score >= 16 && score <= 17) {
        return 3;
    } else if (score >= 18 && score <= 19) {
        return 4;
    } else if (score >= 20 && score <= 21) {
        return 5;
    } else if (score >= 22 && score <= 23) {
        return 6;
    } else if (score >= 24 && score <= 25) {
        return 7;
    } else if (score >= 26 && score <= 27) {
        return 8;
    } else if (score >= 28 && score <= 29) {
        return 9;
    } else if (score >= 30) {
        return 10;
    }
}