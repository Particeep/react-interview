const importAll = (r) => {
    return r.keys().map(r);
  }
  
  export const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));