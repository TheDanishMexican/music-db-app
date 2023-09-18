"use strict";

import { endpoint } from "../main.js";

export async function search() {
    console.log('search here');

    const searchInput = document.querySelector("#searchInput").value.trim();

    // try {
    //     const response = await fetch(`${endpoint}/search?query=${searchInput}`);
    //     const data = await response.json();

    //     console.log(data);
    // } catch {}
} 