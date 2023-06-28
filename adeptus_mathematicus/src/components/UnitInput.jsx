import React from 'react';
import NumberInput from './NumberInput';

function UnitInput({ title, unitStats, setUnitStats, type }) {

    const handleIncrement = (statName) => {
        setUnitStats({
            ...unitStats,
            [statName]: (unitStats[statName] || 0) + 1,
        });
    };

    const handleDecrement = (statName) => {
        if (unitStats[statName] > 0) {
            setUnitStats({
                ...unitStats,
                [statName]: unitStats[statName] - 1,
            });
        }
    };

    // make a an attackabilities thingie that we can put in the return statement conditionally
    // the abilities are anti assault blast conversion devastating wounds extra attacks hazardous heavy indirectfire ignorescover lance lethalhits linkedfire melta pistol precision psychic rapidfire sustainedhits torrent twinlinked

    const attackAbilities = [
        'Anti-',
        'Assault',
        'Blast',
        'Conversion',
        'Devastating wounds',
        'Extra attacks',
        'Hazardous',
        'Heavy',
        'Indirect fire',
        'Ignores cover',
        'Lance',
        'Lethal hits',
        'Linked fire',
        'Melta',
        'Pistol',
        'Precision',
        'Psychic',
        'Rapidfire',
        'Sustained hits',
        'Torrent',
        'Twin-linked',
    ];

    return (
        <div className="unit-input">
            <h2 className="unit-input__title">{title}</h2>
            {type === 'attacker' && (
                <div className="attacker">
                    <div className='attackStatsDiv'>
                    <label>
                        Attacks
                        <NumberInput
                            value={unitStats.attacks || 0}
                            onIncrement={() => handleIncrement('attacks')}
                            onDecrement={() => handleDecrement('attacks')}
                        />
                    </label>
                    <label>
                        Weapon Skill
                        <NumberInput
                            value={unitStats.weaponSkill || 0}
                            onIncrement={() => handleIncrement('weaponSkill')}
                            onDecrement={() => handleDecrement('weaponSkill')}
                        />
                    </label>
                    <label>
                        Strength
                        <NumberInput
                            value={unitStats.strength || 0}
                            onIncrement={() => handleIncrement('strength')}
                            onDecrement={() => handleDecrement('strength')}
                        />
                    </label>
                    <label>
                        Armour Penetration
                        <NumberInput
                            value={unitStats.armourPenetration || 0}
                            onIncrement={() => handleIncrement('armourPenetration')}
                            onDecrement={() => handleDecrement('armourPenetration')}
                        />
                    </label>
                    <label>
                        Damage
                        <NumberInput
                            value={unitStats.damage || 0}
                            onIncrement={() => handleIncrement('damage')}
                            onDecrement={() => handleDecrement('damage')}
                        />
                    </label>
                    </div>
                    <div className='attackAbilitiesDiv'>
                        {attackAbilities.map((ability, index) => (
                            <label className="attackAbilities" key={index}>
                                {ability}
                                <input type="checkbox" />
                            </label>
                        ))}
                    </div>
                </div>
            )}
            {type === 'defender' && (
                <>
                    <label>
                        Toughness
                        <NumberInput
                            value={unitStats.toughness || 0}
                            onIncrement={() => handleIncrement('toughness')}
                            onDecrement={() => handleDecrement('toughness')}
                        />
                    </label>
                    <label>
                        Wounds
                        <NumberInput
                            value={unitStats.wounds || 0}
                            onIncrement={() => handleIncrement('wounds')}
                            onDecrement={() => handleDecrement('wounds')}
                        />
                    </label>
                    <label>
                        Save
                        <NumberInput
                            value={unitStats.save || 0}
                            onIncrement={() => handleIncrement('save')}
                            onDecrement={() => handleDecrement('save')}
                        />
                    </label>
                    <label>
                        Unit size
                        <NumberInput
                            value={unitStats.unitSize || 0}
                            onIncrement={() => handleIncrement('unitSize')}
                            onDecrement={() => handleDecrement('unitSize')}
                        />
                    </label>
                </>
            )}
        </div>
    );
}

export default UnitInput;