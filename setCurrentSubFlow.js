const setCurrentSubFlow = (state, subFlow) => {
   state.currentSubFlow = subFlow;
   state.currentGroup = state.subFlows[subFlow - 1].groups[0];
   let currentStep = 0;
   state.subFlows.forEach((stateSubFlow, i) => {
      if (i < subFlow -1) {
         stateSubFlow.groups.forEach(subFlowGroup => {
            currentStep += subFlowGroup.steps.length;
         });
      }
   });
   state.currentStep = currentStep;
};

module.exports = setCurrentSubFlow;
