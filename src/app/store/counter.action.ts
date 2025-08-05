import { createAction } from "@ngrx/store";

/** 
 * createAction(string) where arugument type is 'string' which represents => [Feature] ActionType
 * 
 * Feature: This part indicates the specific feature or component of the application 
 * the action relates to. In this case, it is the "Counter Component".
 * 
 * ActionType: This part describes what the action does. Here, it indicates that the
 * action is intended to increment a counter
 * **/
export const increment = createAction('[counter] Increment');
export const decrement = createAction('[counter] Decrement')