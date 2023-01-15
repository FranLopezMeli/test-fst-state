const getGroups = (data, subFlow) => {
   const groups = [];
   let currentType = null;
   let currentGroupIndex = 0;
   const steps = data.steps.filter(step => step.subFlow === subFlow);

   // Recorremos los steps y por cada uno
   // validamos si no existe currentType (significa que es el primer step)
   //  => cumple => creamos el primer grupo agregando el primer step
   //  => no cumple =>
   //    => validamos que el currentType sea el mismo que el del step
   //       => cumple => agregamos el step al grupo que indica el currentGroupIndex
   //       => no cumple => creamos un nuevo grupo agregando el primer step y aumentando el currentGroupIndex
   steps.forEach((step) => {
      if(!currentType) {
         currentType = step.type;
         groups.push({
            type: step.type,
            steps: [step]
         });
      } else {
         if(step.type === currentType) {
            groups[currentGroupIndex].steps.push(step);
         } else {
            currentType = step.type;
            currentGroupIndex ++;
            groups.push({
               type: step.type,
               steps: [step]
            });
         }
      }
   });

   return groups;
};

module.exports = getGroups;
