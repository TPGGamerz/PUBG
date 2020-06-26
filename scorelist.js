// JavaScript source code
class Team {
    constructor(t,kp1,pp1,kp2,pp2,kp3,pp3,kp4,pp4,kp5,pp5,kp6,pp6,kp7,pp7) {
        this.tname = t;
        this.kp1 = kp1;
        this.pp1 = pp1;
        this.kp2 = kp2;
        this.pp2 = pp2;
        this.kp3 = kp3;
        this.pp3 = pp3;
        this.kp4 = kp4;
        this.pp4 = pp4;
        this.kp5 = kp5;
        this.pp5 = pp5;
        this.kp6 = kp6;
        this.pp6 = pp6;
        this.kp7 = kp7;
        this.pp7 = pp7;
        this.overall = kp1 + pp1 + kp2 + pp2 + kp3 + pp3 + kp4 + pp4 + kp5 + pp5 + kp6 + pp6+ + kp7 + pp7;
    }
}
var arr = [];
//arr[x] = new Team("Team name", kp1 , pp1 , kp2 , pp2 , kp3 , pp3 , kp4 , pp4 , kp5 , pp5, kp6, pp6, kp7, pp7);


arr[0] = new Team("OG             ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[1] = new Team(" XTRANJEROS    ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[2] = new Team("TEAM PWOLI     ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[3] = new Team("TEAM TTx       ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[4] = new Team("BORNKILLERZ    ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[5] = new Team("TEAM I͜͡NSANE    ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[6] = new Team("SpYDeR         ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[7] = new Team("TEAM BT        ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[8] = new Team(" KFG           ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[9] = new Team("BRTHxkerala    ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[10] = new Team("TEAM 6AM      ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[11] = new Team("TEAM IDEAL-1  ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[12] = new Team("TEAM IDEAL-2  ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[13] = new Team("Team ZOE      ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[14] = new Team("GREAT LEOS    ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[15] = new Team("TxT           ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[16] = new Team("KɸR〆         ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[17] = new Team("RAPTORS       ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[18] = new Team("white walkers ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[19] = new Team("KL01彡CREW    ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[20] = new Team("RQD           ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[21] = new Team("M24 ßoys      ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[22] = new Team("TAFrecruit    ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[23] = new Team("8DPKerala     ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[24] = new Team("TPG๛          ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length-1 ; j++) {
        if (arr[j].overall < arr[j + 1].overall) {
            t = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = t;
        }
        else if (arr[j].overall == arr[j + 1].overall) {
            var kpj = arr[j].kp1 + arr[j].kp2 + arr[j].kp3 + arr[j].kp4 + arr[j].kp5 + arr[j].kp6 + arr[j].kp7;
            var kpj2 = arr[j+1].kp1 + arr[j + 1].kp2 + arr[j + 1].kp3 + arr[j + 1].kp4 + arr[j + 1].kp5 + arr[j + 1].kp6 + arr[j + 1].kp7;
            if (kpj < kpj2) {
                t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
}
