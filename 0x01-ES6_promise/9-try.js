#!/usr/bin/node
export default function guardrail(mathFunction) {
    const queue = [];
    try {
        const res = mathFunction();
        queue.push(res);
        queue.push('Guardrail was processed');
    } catch (err){
        queue.push(`Error: ${err.message}`);
        queue.push('Guardrail was processed');
    }
    return queue;

}