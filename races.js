function getRaceStats(charRace) {

    // Adjust stats based on the selected race
    switch (charRace) {
        case 'human':
            var humanStatBonusSelect = document.getElementById('charStatBonus');
            var selectedStatBonus = humanStatBonusSelect.options[humanStatBonusSelect.selectedIndex].value;

            if (selectedStatBonus === 'strength') { 
                return { strength: 2 }; 
            }
            else if (selectedStatBonus === 'dexterity') {
                return { dexterity: 2 };
            }
            else if (selectedStatBonus === 'constitution') {
                return { constitution: 2 };
            }
            else if (selectedStatBonus === 'intelligence') {
                return { intelligence: 2 };
            }
            else if (selectedStatBonus === 'wisdom') {
                return { wisdom: 2 };
            }
            else if (selectedStatBonus === 'charisma') {
                return { charisma: 2 };
            }
            break;
        case 'elf':
            return { dexterity: 2, intelligence: 2, constitution: -2 };
        case 'dwarf':
            return { constitution: 2, wisdom: 2, charisma: -2 };
        // Add more cases for other races
        default:
            return {};
    }
    return raceStats;
}
