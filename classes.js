function getClassStats(charClass){

    let classStats

    // Adjust stats based on the selected class
    switch (charClass) {
        case 'fighter':
            classStats = { strength: 2, constitution: 1 };
            break;
        case 'wizard':
            classStats = { intelligence: 2, wisdom: 1 };
            break;
        case 'rogue':
            classStats = { dexterity: 2, charisma: 1 };
            break;
        // Add more cases for other classes
        default:
            return {};
    }
    return classStats;
}