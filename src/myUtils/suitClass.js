/** Returns CSS class(es) that respect the SUITCSS naming convention, and ignores any falsy input */
function suitClass (baseClass, ...otherClasses) {
  otherClasses = otherClasses
    .filter(cl => !!cl)
    .map(cl => {
      if (cl.startsWith('--')) {
        return baseClass + cl
      } else {
        return cl
      }
    })

  return [baseClass, ...otherClasses].join(' ')
}

export default suitClass
