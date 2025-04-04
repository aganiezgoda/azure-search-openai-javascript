const globalConfig = {
  BOT_TYPING_EFFECT_INTERVAL: 50, // in ms

  // Is default prompts enabled?
  IS_DEFAULT_PROMPTS_ENABLED: true,
  // Default prompts to display in the chat
  DISPLAY_DEFAULT_PROMPTS_BUTTON: 'Nie jesteś pewien, o co spytać? Sprawdź nasze sugestie!',
  // This are the chat bubbles that will be displayed in the chat
  CHAT_MESSAGES: [],
  // This are the labels for the chat button and input
  CHAT_BUTTON_LABEL_TEXT: 'Zadaj pytanie',
  CHAT_CANCEL_BUTTON_LABEL_TEXT: 'Anuluj generowanie odpowiedzi',
  CHAT_VOICE_BUTTON_LABEL_TEXT: 'Zapytaj głosowo',
  CHAT_VOICE_REC_BUTTON_LABEL_TEXT: 'Nasłuchuję',
  CHAT_INPUT_PLACEHOLDER:
    'Wprowadź swoje pytanie, np. "Zniesienie obowiązku badań okresowych dla osób z trwałą niepełnosprawnością"',
  USER_IS_BOT: 'Asystent',
  RESET_BUTTON_LABEL_TEXT: 'X',
  RESET_BUTTON_TITLE_TEXT: 'Resetuj aktualne pytanie',
  RESET_CHAT_BUTTON_TITLE: 'Resetuj czat',
  // Copy response to clipboard
  COPY_RESPONSE_BUTTON_LABEL_TEXT: 'Skopiuj odpowiedź',
  COPIED_SUCCESSFULLY_MESSAGE: 'Odpowiedź Skopiowana!',
  // Follow up questions text
  FOLLOW_UP_QUESTIONS_LABEL_TEXT: 'Możesz również spytać...',
  SHOW_THOUGH_PROCESS_BUTTON_LABEL_TEXT: 'Pokaż proces',
  HIDE_THOUGH_PROCESS_BUTTON_LABEL_TEXT: 'Ukryj proces',
  LOADING_INDICATOR_TEXT: 'Proszę czekać. Generuję odpowiedź...',
  LOADING_TEXT: 'Ładuję odpowiedź...',
  // API ERROR HANDLING IN UI
  API_ERROR_MESSAGE: 'Sorry, we are having some problems. Please try again later.',
  INVALID_REQUEST_ERROR: 'Unable to generate answer for this query. Please modify your question and try again.',
  // Config pertaining the response format
  THOUGHT_PROCESS_LABEL: 'Proces',
  SUPPORT_CONTEXT_LABEL: 'Kontekst odpowiedzi',
  CITATIONS_LABEL: 'Sprawdź źródła:',
  CITATIONS_TAB_LABEL: 'Źródła',
  // Custom Branding
  IS_CUSTOM_BRANDING: true,
  // Custom Branding details
  // All these should come from persistence config
  BRANDING_URL: '#',
  BRANDING_LOGO_ALT: 'Brand Logo',
  BRANDING_HEADLINE: 'Witamy w naszym asystencie prawnym!',
  SHOW_CHAT_HISTORY_LABEL: 'Pokaż historię czatu',
  HIDE_CHAT_HISTORY_LABEL: 'Ukryj historię czatu',
  CHAT_MAX_COUNT_TAG: '{MAX_CHAT_HISTORY}',
  CHAT_HISTORY_FOOTER_TEXT: 'Showing past {MAX_CHAT_HISTORY} conversations',
};

const teaserListTexts = {
  TEASER_CTA_LABEL: 'Zapytaj',
  HEADING_CHAT: 'Porozmawiaj z naszym asystentem prawnym',
  HEADING_ASK: 'Zadaj pytanie',
  DEFAULT_PROMPTS: [
    {
      description: 'Ile wynosi VAT na posiłki?',
    },
    {
      description: 'What is the refund policy?',
    },
    {
      description: 'How to contact a representative?',
    },
  ],
};

const NEXT_QUESTION_INDICATOR = 'Proponowane pytania:';

const requestOptions = {
  approach: 'rrr',
  overrides: {
    retrieval_mode: 'hybrid',
    semantic_ranker: true,
    semantic_captions: false,
    suggest_followup_questions: true,
  },
};

const chatHttpOptions = {
  // API URL for development purposes
  url: 'http://localhost:3000',
  method: 'POST',
  stream: true,
};

const MAX_CHAT_HISTORY = 5;

const APPROACH_MODEL = ['rrr', 'rtr'];

export {
  globalConfig,
  requestOptions,
  chatHttpOptions,
  NEXT_QUESTION_INDICATOR,
  APPROACH_MODEL,
  teaserListTexts,
  MAX_CHAT_HISTORY,
};
