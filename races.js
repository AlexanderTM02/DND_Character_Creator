function getRaceStats(charRace) {

    let raceStats
    // Adjust stats based on the selected race
    switch (charRace) {
        case 'human':
            raceStats = { strength: 1, dexterity: 1,constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 };
            break;
        case 'elf':
            raceStats = { dexterity: 2 };
            break;
        case 'dwarf':
            raceStats = { constitution: 2 };
            break;
        // Add more cases for other races
        default:
            return{};
    }
    return raceStats;
}