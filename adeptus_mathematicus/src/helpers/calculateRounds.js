export function calculateRounds(attacker, defender) {
    // Assume inputs are numbers
    const {
        attacks,
        weaponSkill,
        strength,
        armourPenetration,
        damage,
        abilities
    } = attacker;

    const {
        toughness,
        save,
        wounds,
        unitSize,
    } = defender;

    // Calculate hit probability
    const hitProbability = (7 - weaponSkill) / 6;

    // Calculate wound probability
    let woundProbability;
    if (strength === toughness) {
        woundProbability = 1 / 2;
    } else if (strength > toughness) {
        woundProbability = 2 / 3;
    } else {
        woundProbability = 1 / 3;
    }

    let saveModifier = save - armourPenetration;
    if (saveModifier < 1) {
      saveModifier = 1; // Ensure saveModifier doesn't go below 1
    }
    
    const saveProbability = (7 - saveModifier) / 6;
    
    // Calculate damage per attack
    const damagePerAttack = hitProbability * woundProbability * (1 - saveProbability) * damage;

    // Calculate number of attacks needed to kill a single model in the unit
    const attacksNeededPerModel = wounds / damagePerAttack;

    // Calculate total attacks needed to eliminate entire unit
    const totalAttacksNeeded = attacksNeededPerModel * unitSize;

    // Calculate number of rounds needed
    const roundsNeeded = totalAttacksNeeded / attacks;

    // Return results
    return {
        hitProbability,
        woundProbability,
        saveProbability,
        damagePerAttack,
        attacksNeededPerModel,
        totalAttacksNeeded,
        roundsNeeded
    };
}
