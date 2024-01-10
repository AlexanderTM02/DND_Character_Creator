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

    // Generate character summary
    const characterSummary = `
    
        <h2>Character Summary</h2>
        <p><strong>Name:</strong> ${charName}<br>
        <strong>Race:</strong> ${charRace}<br>
        <strong>Allignment:</strong> ${charAllignment}<br>
        <strong>Background:</strong> ${charBackground}<br>
        <strong>Class:</strong> ${charClass}<br>
        <strong>Level:</strong> ${charLevel}<br>
        
        <br><strong>Stats:</strong></p>
        <ul>
            <li>Strength: ${finalStats.strength}</li>
            <li>Dexterity: ${finalStats.dexterity}</li>
            <li>Constitution: ${finalStats.constitution}</li>
            <li>Intelligence: ${finalStats.intelligence}</li>
            <li>Wisdom: ${finalStats.wisdom}</li>
            <li>Charisma: ${finalStats.charisma}</li>
        </ul>
    `;

    // Display character summary
    document.getElementById('characterResult').innerHTML = characterSummary;
}