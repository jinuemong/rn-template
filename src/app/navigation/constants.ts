// Navigation constants

export const TAB_IDS = {
  NAVIGATION1: 'navigation1',
  NAVIGATION2: 'navigation2',
  NAVIGATION3: 'navigation3',
  NAVIGATION4: 'navigation4',
  NAVIGATION5: 'navigation5',
} as const;

export const TAB_ICONS = {
  [TAB_IDS.NAVIGATION1]: '1️⃣',
  [TAB_IDS.NAVIGATION2]: '2️⃣',
  [TAB_IDS.NAVIGATION3]: '3️⃣',
  [TAB_IDS.NAVIGATION4]: '4️⃣',
  [TAB_IDS.NAVIGATION5]: '5️⃣',
} as const;

export const TAB_TITLES = {
  [TAB_IDS.NAVIGATION1]: '탭 1',
  [TAB_IDS.NAVIGATION2]: '탭 2',
  [TAB_IDS.NAVIGATION3]: '탭 3',
  [TAB_IDS.NAVIGATION4]: '탭 4',
  [TAB_IDS.NAVIGATION5]: '탭 5',
} as const; 