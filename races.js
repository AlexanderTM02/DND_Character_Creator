function getRaceStats(charRace) {

    // Adjust stats based on the selected race
    switch (charRace) {
        case 'human':
            return { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 };
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

function getRacialTraits(charRace){
    switch (charRace){
        case 'human':

            const humanTraits = `
            
            <p>•Creature Type: Humanoid</p>
            <p>•Size: Medium</p>
            <p>•Base Speed: 30 ft</p>
            <p>•Ability Score Modifiers: Your ability scores each increase by 1.</p>
            <p>•Languages: Common</p>

            `

            return humanTraits;
        break;
        case 'elf':

            const elfTraits = `
            
            <p>•Creature Type: Humanoid (Fey lineage)</p>
            <p>•Size: Medium</p>
            <p>•Base Speed: 30 ft</p>
            <p>•Ability Score Modifiers: +2 Dexterity, +2 Intelligence, –2 Constitution</p>
            <p>•Languages: Common, Elven</p>
            <p>•Darkvision: Elves can see in the dark up to 60 feet.</p>
            <p>•Fey Ancestry: Elves gain a +2 racial saving throw bonus against enchantment spells and effects.</p>
            <p>•Elf Weapon Familiarity: Elves are proficient with longbows (including composite longbows), longswords, rapiers, and shortbows (including composite shortbows), and treat any weapon with the word “elven” in its name as a martial weapon.</p>
            <p>•Keen Senses: Elves receive a +2 racial bonus on Perception skill checks.</p>
            <trance: Elves only need to rest 4 hours to gain the benefits of 8 hours of sleep.</p>

            `

            return elfTraits;
        break;
        case 'dwarf':

            const dwarfTraits = `
            
            <p>•Creature Type: Humanoid (Dwarf lineage)</p>
            <p>•Size: Medium</p>
            <p>•Base Speed: 25 ft</p>
            <p>•Ability Score Modifiers: +2 Constitution, +2 Wisdom, –2 Charisma</p>
            <p>•Languages: Common, Dwarven</p>
            <p>•Darkvision: Dwarves can see in the dark up to 60 feet.</p>
            <p>•speed 20 feet, but their speed is never modified by armor or encumbrance.</p>
            <p>•Defensive Training: Dwarves gain a +4 dodge bonus to AC against monsters of the giant subtype.</p>
            <p>•Dwarven Resilience: Dwarves gain a +2 racial bonus on saving throws against poison, spells, and spell-like abilities.</p>
            <p>•Dwarven Toughness: Dwarves gain +2 hit points at first level and 1 hit point whenever they gain a level.</p>

            `

            return dwarfTraits;
        break;
    }
}