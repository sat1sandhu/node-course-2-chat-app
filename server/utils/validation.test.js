const expect = require ('expect');
var {isRealString} = require ('./validation');

describe ('isRealString', () => {
    it ('Should reject non-string values', () => {
        var str = 123;
        var data = isRealString(str);
        expect(data).toBe(false);
    });

    it ('Should reject string with only spaces', () => {
        var str = "  ";
        var data = isRealString (str);
        expect(data).toBe(false);
    });

    it ('Should allow string with non-space characters', () => {
        var str = "Allan";
        var data = isRealString (str);
        expect(data).toBe(true);
    });
});
