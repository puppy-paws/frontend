import {SyntheticEvent} from "react";
import {NULL_CHAT_PROFILE_IMAGE_URL, NULL_INPUT_IMAGE_URL, NULL_PROFILE_IMAGE_URL} from "@/app/_const/const";

export const chatProfileDefaultImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = NULL_CHAT_PROFILE_IMAGE_URL;
};

export const userProfileDefaultImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = NULL_PROFILE_IMAGE_URL;
};

export const inputImageDefaultImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = NULL_INPUT_IMAGE_URL;
    e.currentTarget.style.display = "none";
    e.currentTarget.style.height = "70px";
    e.currentTarget.style.width = "70px";
};