#!/usr/bin/node
import { createUser, uploadPhoto } from './utils.js';

export default async function asycnUploadUser() {
    try {
        const up = await uploadPhoto();
        const create = await createUser();
        const obj = {
            photo: up,
            user: create
        }
        return obj
    } catch (err) {
        return ({
            photo: null,
            user: null
        })
    }
}