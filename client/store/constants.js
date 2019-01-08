
// SCHEDULE Actions
const NEW_SCHEDULE_INIT = 'NEW_SCHEDULE_INIT';
const NEW_SCHEDULE_RESET = 'NEW_SCHEDULE_RESET';
const NEW_SCHEDULE_SET_TIME = 'NEW_SCHEDULE_SET_TIME';
const NEW_SCHEDULE_SET_REPEAT = 'NEW_SCHEDULE_SET_REPEAT';
const NEW_SCHEDULE_SET_TYPE = 'NEW_SCHEDULE_SET_TYPE';

const ADD_SCHEDULE = 'ADD_SCHEDULE';
const UPDATE_SCHEDULE = 'UPDATE_SCHEDULE';
const REMOVE_SCHEDULE = 'REMOVE_SCHEDULE';
const REMOVE_DEVICE_SCHEDULES = 'REMOVE_DEVICE_SCHEDULES';
const ENABLE_SCHEDULE = 'ENABLE_SCHEDULE';
const DISABLE_SCHEDULE = 'DISABLE_SCHEDULE';

// DEVICE Actions
const ADD_DEVICE = 'ADD_DEVICE';
const REMOVE_DEVICE = 'REMOVE_DEVICE';
const RENAME_DEVICE = 'RENAME_DEVICE';


// Current Device Actions
const SET_CURRENT_DEVICE = 'SET_CURRENT_DEVICE';
const SET_CURRENT_DEVICE_LEVEL = 'SET_CURRENT_DEVICE_LEVEL';
const SET_CURRENT_DEVICE_COLOR = 'SET_CURRENT_DEVICE_COLOR'
const RENAME_CURRENT_DEVICE = 'RENAME_CURRENT_DEVICE';
const ENABLE_CURRENT_DEVICE = 'ENABLE_CURRENT_DEVICE';
const DISABLE_CURRENT_DEVICE = 'DISABLE_CURRENT_DEVICE';
const RESET_CURRENT_DEVICE = 'RESET_CURRENT_DEVICE';


// Navigation state
const REPLACE_CURRENT_SCREEN = "REPLACE_CURRENT_SCREEN"; 
const UPDATE_CURRENT_TAB = "UPDATE_NAVIGATION_TAB";

export {
    // schedules
    NEW_SCHEDULE_INIT,
    NEW_SCHEDULE_RESET,
    NEW_SCHEDULE_SET_TIME,
    NEW_SCHEDULE_SET_REPEAT,
    NEW_SCHEDULE_SET_TYPE,
    ADD_SCHEDULE,
    UPDATE_SCHEDULE,
    REMOVE_SCHEDULE,
    REMOVE_DEVICE_SCHEDULES,
    ENABLE_SCHEDULE,
    DISABLE_SCHEDULE,
    // device
    ADD_DEVICE,
    REMOVE_DEVICE,
    RENAME_DEVICE,
    // current devices
    SET_CURRENT_DEVICE,
    SET_CURRENT_DEVICE_LEVEL,
    SET_CURRENT_DEVICE_COLOR,
    RENAME_CURRENT_DEVICE,
    ENABLE_CURRENT_DEVICE,
    DISABLE_CURRENT_DEVICE,
    RESET_CURRENT_DEVICE,
    //Navigation
    REPLACE_CURRENT_SCREEN,
    UPDATE_CURRENT_TAB

};