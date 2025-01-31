import { singularize } from 'ember-inflector';

export const adminPolicy = (mountPath) => {
  return `
    path "${mountPath}/*" {
      capabilities = ["create", "read", "update", "delete", "list"]
    },
  `;
};

// keys require singularized paths for GET
export const readerPolicy = (mountPath, resource) => {
  return `
    path "${mountPath}/${resource}" {
      capabilities = ["read", "list"]
    },
    path "${mountPath}/${resource}/*" {
      capabilities = ["read", "list"]
    },
    path "${mountPath}/${singularize(resource)}" {
      capabilities = ["read", "list"]
    },
    path "${mountPath}/${singularize(resource)}/*" {
      capabilities = ["read", "list"]
    },
  `;
};
export const updatePolicy = (mountPath, resource) => {
  return `
    path "${mountPath}/${resource}" {
      capabilities = ["read", "list"]
    },
    path "${mountPath}/${resource}/*" {
      capabilities = ["read", "update"]
    },
    path "${mountPath}/${singularize(resource)}/*" {
      capabilities = ["read", "update"]
    },    
    path "${mountPath}/issue/*" {
      capabilities = ["update"]
    },
    path "${mountPath}/generate/*" {
      capabilities = ["update"]
    },
    path "${mountPath}/import" {
      capabilities = ["update"]
    },
    path "${mountPath}/sign/*" {
      capabilities = ["update"]
    },
  `;
};
