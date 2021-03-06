import { traverse } from '../traverse';
export function sampleObject(schema, options = {}) {
  let res = {};
  if (schema && typeof schema.properties === 'object') {
    Object.keys(schema.properties).forEach(propertyName => {
      if (options.skipReadOnly && schema.properties[propertyName].readOnly) {
        return;
      }
      res[propertyName] = traverse(schema.properties[propertyName]);
    });
  }
  if (schema && typeof schema.additionalProperties === 'object') {
    res.property1 = traverse(schema.additionalProperties);
    res.property2 = traverse(schema.additionalProperties);
  }
  return res;
}
