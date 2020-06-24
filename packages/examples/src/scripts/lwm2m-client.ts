/********************************************************************************
 * Copyright (c) 2018 - 2019 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0, or the W3C Software Notice and
 * Document License (2015-05-13) which is available at
 * https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document.
 *
 * SPDX-License-Identifier: EPL-2.0 OR W3C-20150513
 ********************************************************************************/

import "wot-typescript-definitions"
import { Helpers } from "@node-wot/core";

let WoT:WoT.WoT;
let WoTHelpers: Helpers;

console.info("Ensure https://leshan.eclipse.org/#/security has the Client Endpoint 'node-wot-test' with Identity 'node-wot' and Key '68656c6c6f'");
console.info("==========");

WoTHelpers.fetch("coap://localhost:5683/counter").then( async (td) => {
    try {
        let leshan = await WoT.consume(td);
        console.info("=== TD ===");
        console.info(td);
        console.info("==========");

        leshan.invokeAction("register", "</0/0>,</3/0>").then( (res) => {
            console.info("Registered");
        }).catch( (err) => {
            console.error("Registration error:", err.message);
        });
    } catch(err) {
        console.error("Script error:", err);
    }
}).catch( (err) => { console.error("Fetch error:", err); });
