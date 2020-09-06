function value(s: string): number {
    switch (s) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
        default:
            return -1;
    }  
};

function romanToInt(s: string): number {
    let result: number = 0;
    
    for (var i = 0; i < s.length; i++) {
        var s1 = value(s[i]);
        
        if (i + 1 < s.length) {
            var s2 = value(s[i + 1]);
            
            if (s1 >= s2) {
                result = result + s1;
            } else {
                result = result + s2 - s1;
                i++;
            }
        } else {
            result = result + s1;
        }
    }
    
    return result;
};
