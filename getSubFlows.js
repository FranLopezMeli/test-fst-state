const getGroups = require("./getGroups");

const getsubFlows = (data) => {
   const subFlows = [];

   // Recorremos los steps y por cada uno
   // validamos si su subFlow (numerico) no sea mayor a la cantidad de subFlows ya generados
   // y creamos un nuevo subFlow llemando a getGroups para obtener los grupos del subFlow
   data.steps.forEach((step) => {
      if (step.subFlow > subFlows.length) {
         subFlows.push({ 
            subFlow: step.subFlow, 
            groups: getGroups(data, step.subFlow)
         });
      }
   });

   return subFlows;
};

module.exports = getsubFlows;
