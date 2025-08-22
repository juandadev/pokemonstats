import { Preferences } from '@/types';

const defaultOptions: Preferences = {
  pkmnTab: 'overview',
  chartMode: 'offensive',
  msgClosed: false,
  game: '',
};

export function getPreferences(): Preferences {
  const preferences = localStorage.getItem('preferences');

  if (!preferences) {
    localStorage.setItem('preferences', JSON.stringify(defaultOptions));
  }

  return preferences
    ? (JSON.parse(preferences) as Preferences)
    : defaultOptions;
}

export function setPreferences(preferences: Partial<Preferences>): void {
  const preferencesObject = localStorage.getItem('preferences');
  let newPreferences: Preferences;

  if (!preferencesObject) {
    newPreferences = { ...defaultOptions, ...preferences };
  } else {
    const parsedPreferences: Preferences = JSON.parse(preferencesObject!);

    newPreferences = { ...parsedPreferences, ...preferences };
  }

  localStorage.setItem('preferences', JSON.stringify(newPreferences));
}
