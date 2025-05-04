export const BadgeRequirementEarnCondition = {
    OWN_ONE_TOKEN: 'Own one Token',
    OWN_ANY_TRAIT: 'Own any trait',
    OWN_ALL_TRAITS: 'Own all traits',
} as const

export type BadgeRequirementEarnConditionType = typeof BadgeRequirementEarnCondition[keyof typeof BadgeRequirementEarnCondition]
