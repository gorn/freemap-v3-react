import { LatLon } from 'fm3/types/common';
import { createStandardAction, createAction } from 'typesafe-actions';
import { RouteMode } from 'fm3/reducers/routePlannerReducer';
import { TransportType } from 'fm3/transportTypeDefs';

export type RoutingMode = 'trip' | 'roundtrip' | 'route';

export type SliceMode = 'foot';

export type ManeuerModifier =
  | 'uturn'
  | 'sharp right'
  | 'slight right'
  | 'right'
  | 'sharp left'
  | 'slight left'
  | 'left'
  | 'straight';

export interface Step {
  maneuver: {
    location: LatLon;
    type: string; // TODO enum?
    modifier: ManeuerModifier;
  };
  distance: number;
  duration: number;
  name: string;
  type: string; // TODO enum?
  modifier: string; // TODO enum?
  mode: SliceMode;
  shapePoints: [number, number][];
  legIndex: number;
  extra?: any; // TODO
}

export interface Alternative {
  itinerary: Step[];
  distance: number;
  duration: number;
  extra?: any; // TODO
}

export const routePlannerSetStart = createStandardAction(
  'ROUTE_PLANNER_SET_START',
)<{ start: LatLon | null; move?: boolean }>();

export const routePlannerSetFinish = createStandardAction(
  'ROUTE_PLANNER_SET_FINISH',
)<{ finish: LatLon | null; move?: boolean }>();

export const routePlannerSetFromCurrentPosition = createStandardAction(
  'ROUTE_PLANNER_SET_FROM_CURRENT_POSITION',
)<'start' | 'finish'>();

export const routePlannerAddMidpoint = createStandardAction(
  'ROUTE_PLANNER_ADD_MIDPOINT',
)<{ midpoint: LatLon; position: number }>();

export const routePlannerSetMidpoint = createStandardAction(
  'ROUTE_PLANNER_SET_MIDPOINT',
)<{ midpoint: LatLon; position: number }>();

export const routePlannerRemoveMidpoint = createStandardAction(
  'ROUTE_PLANNER_REMOVE_MIDPOINT',
)<number>();

export const routePlannerSetTransportType = createStandardAction(
  'ROUTE_PLANNER_SET_TRANSPORT_TYPE',
)<TransportType>();

export const routePlannerSetMode = createStandardAction(
  'ROUTE_PLANNER_SET_MODE',
)<RoutingMode>();

export const routePlannerSetPickMode = createStandardAction(
  'ROUTE_PLANNER_SET_PICK_MODE',
)<'start' | 'finish'>();

export const routePlannerSetResult = createStandardAction(
  'ROUTE_PLANNER_SET_RESULT',
)<{
  timestamp: number;
  transportType: TransportType;
  alternatives: Alternative[];
}>();

export const routePlannerToggleItineraryVisibility = createAction(
  'ROUTE_PLANNER_TOGGLE_ITINERARY_VISIBILITY',
);

export const routePlannerSetParams = createStandardAction(
  'ROUTE_PLANNER_SET_PARAMS',
)<{
  start: LatLon | null;
  finish: LatLon | null;
  midpoints: LatLon[];
  transportType: TransportType | null;
  mode?: RouteMode | null;
}>();

export const routePlannerPreventHint = createAction(
  'ROUTE_PLANNER_PREVENT_HINT',
);
export const routePlannerSetActiveAlternativeIndex = createStandardAction(
  'ROUTE_PLANNER_SET_ACTIVE_ALTERNATIVE_INDEX',
)<number>();

export const routePlannerToggleElevationChart = createAction(
  'ROUTE_PLANNER_TOGGLE_ELEVATION_CHART',
);
export const routePlannerSwapEnds = createAction('ROUTE_PLANNER_SWAP_ENDS');

export const routePlannerConvertToMeasurement = createAction(
  'ROUTE_PLANNER_CONVERT_TO_MEASUREMENT',
);
