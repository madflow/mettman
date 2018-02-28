const ladsMett = 100;
const galsMett = 60;
const oellig = 0.4;
const bautzner = 1;
const butter = 1;
const salzPfeffer = 1;

module.exports = {
    calc(l, g) {
        return {
            b: l + g,
            m: l * ladsMett + g * galsMett,
            o: Math.round((l + g) * oellig, 0),
            s: bautzner,
            sp: salzPfeffer,
            bu: butter
        };
    }
};
