function getClassStats(charClass){

    let classStats

    // Adjust stats based on the selected class
    switch (charClass) {
        case 'fighter':
            let fighterStatBonusSelect = document.getElementById('charClassSkill');
            let fighterStatBonus = fighterStatBonusSelect.options[fighterStatBonusSelect.selectedIndex].value;
            break;
        case 'wizard':
            classStats = {};
            break;
        case 'rogue':
            classStats = {};
            break;
        // Add more cases for other classes
        default:
            return {};
    }
    return classStats;
}