function $("#spline") {
    const result = Array.from(document.querySelectorAll(selector));
    result.forEach = Array.prototype.forEach;
    // Perhaps map, filter, etc.; add in a loop?
    return result;
}