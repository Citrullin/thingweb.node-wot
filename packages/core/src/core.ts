/********************************************************************************
 * Copyright (c) 2018 - 2020 Contributors to the Eclipse Foundation
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

/** Exports of this module */

// Servient is also the default export
import { default as Servient } from "./servient";

export default Servient;
export { Servient };

// ContentSerdes
export * from "./content-serdes";

// Protocols & Content
export * from "./protocol-interfaces";
export { Content } from "./protocol-interfaces";

// Scripting API objects
export { default as ConsumedThing } from "./consumed-thing";
export { default as ExposedThing } from "./exposed-thing";

// Helper Implementations
export { default as Helpers } from "./helpers";
export { default as ProtocolHelpers } from "./protocol-helpers";
