/* External Imports */
import mixpanel from 'mixpanel-browser';

// Event names as constants to ensure consistency
export const MIXPANEL_EVENTS = {
  GAME_STARTED: 'personality_game_started',
  GAME_COMPLETED: 'personality_game_completed',
  GAME_REPLAY: 'personality_game_replay',
  GAME_SHARE: 'personality_game_share',
  GAME_SHARE_INSTA: 'personality_game_share_insta',
  GAME_WATCHNOW_CTA: 'personality_game_watchnow_cta'
} as const;

// Get Mixpanel token from environment variables based on mode
const MIXPANEL_TOKEN = import.meta.env.MODE === 'production' 
  ? import.meta.env.VITE_MIXPANEL_TOKEN_PROD
  : import.meta.env.VITE_MIXPANEL_TOKEN_DEV;

// Track initialization status
let isInitialized = false;

// Initialize Mixpanel with configuration
if (MIXPANEL_TOKEN) {
  try {
    // Initialize Mixpanel
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: import.meta.env.MODE !== 'production',
      track_pageview: true,
      persistence: 'localStorage',
      ignore_dnt: true
    });

    // Register super properties
    mixpanel.register({
      app_version: '1.0.0',
      platform: 'web',
      environment: import.meta.env.MODE,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      language: navigator.language
    });

    isInitialized = true;
    console.log('✅ Mixpanel initialized in ' + import.meta.env.MODE + ' mode');
  } catch (error) {
    console.error('❌ Failed to initialize Mixpanel:', error);
  }
} else {
  console.error('❌ Mixpanel token not found in environment variables');
}

// Type for event properties
interface EventProperties {
  [key: string]: string | number | boolean | object | undefined;
}

/**
 * Mixpanel tracking utility
 */
export const mp = {
  /**
   * Track any event with optional properties
   */
  track: (eventName: string, properties?: EventProperties) => {
    if (!isInitialized) {
      console.error('❌ Mixpanel not initialized. Event not tracked:', eventName);
      return;
    }

    try {
      mixpanel.track(eventName, {
        environment: import.meta.env.MODE,
        ...properties
      });
      console.log('✅ Mixpanel event tracked:', eventName, properties);
    } catch (error) {
      console.error('❌ Mixpanel tracking error:', error);
    }
  }
};