import { createStandardAction, createAction } from 'typesafe-actions';
import { LatLon, AppState } from 'fm3/types/common';

export type Tool =
  | 'objects'
  | 'route-planner'
  | 'measure-dist'
  | 'measure-ele'
  | 'measure-area'
  | 'route-planner'
  | 'track-viewer'
  | 'info-point'
  | 'changesets'
  | 'gallery'
  | 'map-details'
  | 'tracking';

export const setActiveModal = createStandardAction('SET_ACTIVE_MODAL')<
  string | null
>();

export const setTool = createStandardAction('SET_TOOL')<Tool | null>();

export const setHomeLocation = createStandardAction('SET_HOME_LOCATION')<{
  lat: number;
  lon: number;
} | null>();

export const startProgress = createStandardAction('START_PROGRESS')<
  string | number
>();

export const stopProgress = createStandardAction('STOP_PROGRESS')<
  string | number
>();

export const setLocation = createStandardAction('SET_LOCATION')<{
  lat: number;
  lon: number;
  accuracy: number;
}>();

export interface PdfExportOptions {
  contours: boolean;
  shadedRelief: boolean;
  hikingTrails: boolean;
  bicycleTrails: boolean;
  skiTrails: boolean;
  horseTrails: boolean;
  scale: number;
  area: 'visible' | 'infopoints';
}

export const setExpertMode = createStandardAction('SET_EXPERT_MODE')<boolean>();

export const setAppState = createStandardAction('SET_APP_STATE')<AppState>();

export const exportGpx = createStandardAction('EXPORT_GPX')<string[]>();

export const exportPdf = createStandardAction('EXPORT_PDF')<PdfExportOptions>();

export const clearMap = createAction('CLEAR_MAP');

export const toggleLocate = createAction('LOCATE');

export const setSelectingHomeLocation = createStandardAction(
  'SET_SELECTING_HOME_LOCATION',
)<boolean>();

export const enableUpdatingUrl = createAction('ENABLE_UPDATING_URL');

export const reloadApp = createAction('RELOAD_APP');

export const saveSettings = createStandardAction('SAVE_SETTINGS')<{
  tileFormat: 'png' | 'jpeg';
  homeLocation: LatLon | null;
  overlayOpacity: { [type: string]: number };
  overlayPaneOpacity: number;
  expertMode: boolean;
  trackViewerEleSmoothingFactor: number;
  user: { name: string | null; email: string | null } | null;
  preventTips: boolean;
}>();

export const setErrorTicketId = createStandardAction('SET_ERROR_TICKET_ID')<
  string
>();

export const setEmbedFeatures = createStandardAction('SET_EMBED_FEATURES')<
  string[]
>();
