
// SCHEDULE Actions
const NEW_SCHEDULE_INSERT = 'NEW_SCHEDULE_INSERT';
const NEW_SCHEDULE_INIT = 'NEW_SCHEDULE_INIT';
const NEW_SCHEDULE_REQUEST_ID = 'NEW_SCHEDULE_REQUEST_ID';
const NEW_SCHEDULE_RESET = 'NEW_SCHEDULE_RESET';
const NEW_SCHEDULE_SET_TIME = 'NEW_SCHEDULE_SET_TIME';
const NEW_SCHEDULE_SET_DATE = 'NEW_SCHEDULE_SET_DATE';
const NEW_SCHEDULE_SET_COLOR = 'NEW_SCHEDULE_SET_COLOR';
const NEW_SCHEDULE_PUSH_REPEAT = 'NEW_SCHEDULE_PUSH_REPEAT';
const NEW_SCHEDULE_REMOVE_REPEAT = 'NEW_SCHEDULE_REMOVE_REPEAT';
const NEW_SCHEDULE_SET_TYPE = 'NEW_SCHEDULE_SET_TYPE';

const LOAD_SCHEDULES = 'LOAD_SCHEDULES';
const SET_SCHEDULES = 'SET_SCHEDULES';
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
const REPLACE_DEVICE_ADDRESS = 'REPLACE_DEVICE_ADDRESS';
const ENABLE_DEVICE = 'ENABLE_DEVICE';
const DISABLE_DEVICE = 'DISABLE_DEVICE';

// Current Device Actions
const SET_CURRENT_DEVICE = 'SET_CURRENT_DEVICE';
const SET_CURRENT_DEVICE_LEVEL = 'SET_CURRENT_DEVICE_LEVEL';
const SET_CURRENT_DEVICE_COLOR = 'SET_CURRENT_DEVICE_COLOR'
const SET_CURRENT_DEVICE_URL = 'SET_CURRENT_DEVICE_URL';
const RENAME_CURRENT_DEVICE = 'RENAME_CURRENT_DEVICE';
const ENABLE_CURRENT_DEVICE = 'ENABLE_CURRENT_DEVICE';
const DISABLE_CURRENT_DEVICE = 'DISABLE_CURRENT_DEVICE';
const RESET_CURRENT_DEVICE = 'RESET_CURRENT_DEVICE';


// Navigation state
const REPLACE_CURRENT_SCREEN = "REPLACE_CURRENT_SCREEN"; 
const UPDATE_CURRENT_TAB = "UPDATE_NAVIGATION_TAB";

// Drawer state
const SET_DRAWER_SHOW = 'SET_DRAWER_SHOW';
const SET_DRAWER_ADD =  'SET_DRAWER_ADD';

// New device
const INIT_NEW_DEVICE = 'INIT_NEW_DEVICE';
const ADD_NEW_DEVICE = 'ADD_NEW_DEVICE';
const SET_NEW_DEVICE_ADDRESS = 'SET_NEW_DEVICE_ADDRESS';
const SET_NEW_DEVICE_NAME = 'SET_NEW_DEVICE_NAME';
const SET_NEW_DEVICE_MESSAGE = 'SET_NEW_DEVICE_MESSAGE';

export {
    // Schedules
    NEW_SCHEDULE_INSERT,
    NEW_SCHEDULE_INIT,
    NEW_SCHEDULE_REQUEST_ID,
    NEW_SCHEDULE_RESET,
    NEW_SCHEDULE_SET_TIME,
    NEW_SCHEDULE_SET_DATE,
    NEW_SCHEDULE_SET_COLOR,
    NEW_SCHEDULE_PUSH_REPEAT,
    NEW_SCHEDULE_REMOVE_REPEAT,
    NEW_SCHEDULE_SET_TYPE,

    LOAD_SCHEDULES,
    SET_SCHEDULES,
    ADD_SCHEDULE,
    UPDATE_SCHEDULE,
    REMOVE_SCHEDULE,
    REMOVE_DEVICE_SCHEDULES,
    ENABLE_SCHEDULE,
    DISABLE_SCHEDULE,

    // Device
    ADD_DEVICE,
    REMOVE_DEVICE,
    RENAME_DEVICE,
    REPLACE_DEVICE_ADDRESS,
    ENABLE_DEVICE,
    DISABLE_DEVICE,

    // current devices
    SET_CURRENT_DEVICE,
    SET_CURRENT_DEVICE_LEVEL,
    SET_CURRENT_DEVICE_COLOR,
    SET_CURRENT_DEVICE_URL,
    RENAME_CURRENT_DEVICE,
    ENABLE_CURRENT_DEVICE,
    DISABLE_CURRENT_DEVICE,
    RESET_CURRENT_DEVICE,
    //Navigation
    REPLACE_CURRENT_SCREEN,
    UPDATE_CURRENT_TAB,

    //Drawer
    SET_DRAWER_SHOW,
    SET_DRAWER_ADD,
    
    //New device
    INIT_NEW_DEVICE,
    ADD_NEW_DEVICE,
    SET_NEW_DEVICE_NAME,
    SET_NEW_DEVICE_ADDRESS,
    SET_NEW_DEVICE_MESSAGE
};