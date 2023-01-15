const data = require('./data.json');
const setCurrentStep = require('./setCurrentStep');
const getSubFlows = require('./getSubFlows');
const setCurrentSubFlow = require('./setCurrentSubFlow');

const state = {
   totalSteps: data.steps.length,
   currentSubFlow: 1,
   currentStep: 1,
   subFlows: [],
   currentGroup: null
};

state.subFlows = getSubFlows(data);
console.log({ state: JSON.stringify(state, null, 2) });

/* setCurrentStep(4);
console.log('step 4', { state: JSON.stringify(state, null, 2) }); */

setCurrentSubFlow(state, 2);
console.log('subFlow 2', { state: JSON.stringify(state, null, 2) });
