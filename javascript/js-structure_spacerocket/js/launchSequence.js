// Implement the launch sequence function here and export it as the default export.

// step 1: import load payload
import { loadPayload } from "../js/core/load.js";

// step 2: fueling
import { fuel } from "../js/core/fuel.js";

// step 3: countdown
import { countdown } from "../js/core/countdown.js";

// step 4: liftoff
import { liftoff } from "../js/core/liftoff.js";

// step 5: import deploy
import { deployPayload } from "../js/core/deploy.js";

// extra steps: import NFSAT and FISHSAT
import { NFSAT, FISHSAT } from "../js/payload/satellites.js";

function launch() {}
