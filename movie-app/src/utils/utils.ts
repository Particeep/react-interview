import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { AppDispatch } from "../redux/store";

export const loadData = async (dispatchFunc:AppDispatch, initFunc: ActionCreatorWithPayload<Array<any>, string>, dataAPI:Promise<Array<any>>) => {
    let data:Array<any> = await dataAPI;
    dispatchFunc(initFunc(data)); 
}