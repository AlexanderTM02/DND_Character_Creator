function getClassStats(charClass){

    let classStats

    // Adjust stats based on the selected class
    switch (charClass) {
        case 'fighter':
            classStats = {};
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