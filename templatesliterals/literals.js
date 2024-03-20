function sides(area, perimeter) {
    if (typeof area !== 'number' || typeof perimeter !== 'number'|| area <= 0 ||perimeter <=0) {
        return [NaN, NaN];
    }
    else{ 
    const expressions = [area, perimeter]  ;
    const root = Math.sqrt((perimeter ** 2) - (16 * area));
    const s1 = (perimeter + root) / 4;
    const s2 = (perimeter - root) / 4;
    
    return ([s2, s1]);    
}}
    module.exports = sides;
/*Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, 
string interpolation with embedded expressions, and special constructs called tagged templat*/