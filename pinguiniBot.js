// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.fansale.it/fansale/tickets/pop-amp-rock/pinguini-tattici-nucleari/558153/12320075
// @grant        none
// ==/UserScript==


setTimeout(() => {
    'use strict';
    let array = document.querySelectorAll('.NumberOfTicketsInOffer');
    array.forEach(div => {
        if (div.textContent.indexOf('2') > 0) {
            sendMessage('Disponibili biglietti Pinguini! ' + window.location.href);
        }
    });
    window.location.reload();
}, 1000)


const sendMessage = (text) => {
    const msg = encodeURIComponent(text)
    fetch(`https://api.telegram.org/bot5044009724:AAHN2hMdmM_ujtPNLEqTWIekzvvBKU9Tbsk/sendMessage?chat_id=403852463&text=${msg}`)
}