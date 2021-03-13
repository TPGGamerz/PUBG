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


arr[0] = new Team("OG             ", 0, 0, 7, 6, 3, 22, 0, 0, 0, 0, 0, 0, 0, 0);

arr[1] = new Team(" XTRANJEROS    ", 1, 14, 0, 0, 2, 7, 0, 0, 1, 3, 1, 16, 9, 12);

arr[2] = new Team("TEAM PWOLI     ", 1, 2, 0, 3, 0, 12, 0, 2, 1, 0, 1, 4, 0, 7);

arr[3] = new Team("TEAM TTx       ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[4] = new Team("BORNKILLERZ    ", 7, 22, 1, 10, 0, 0, 4, 19, 3, 8, 0, 12, 9, 22);

arr[5] = new Team("TEAM I͜͡NSANE    ", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[6] = new Team("SpYDeR         ", 0, 5, 2, 14, 0, 0, 2, 22, 5, 6, 0, 0, 0, 0);

arr[7] = new Team("TEAM BT        ", 10, 19, 4, 4, 7, 14, 13, 10, 6, 2, 19, 30, 8, 19);

arr[8] = new Team(" KFG           ", 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0);

arr[9] = new Team("BRTHxkerala    ", 2, 3, 9, 7, 11, 30, 1, 0, 1, 0, 0, 0, 0, 0);

arr[10] = new Team("TEAM 6AM      ", 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[11] = new Team("TEAM IDEAL-1  ", 6, 7, 6, 22, 0, 0, 0, 6, 1, 0, 0, 0, 1, 5);

arr[12] = new Team("TEAM IDEAL-2  ", 0, 0, 0, 0, 0, 0, 1, 7, 0, 0, 0, 0, 0, 0);

arr[13] = new Team("Team ZOE      ", 0, 6, 0, 5, 2, 3, 2, 0, 0, 12, 0, 10, 0, 0);

arr[14] = new Team("GREAT LEOS    ",15, 12, 1, 12, 3, 4, 3, 8, 2, 10, 0, 1, 1, 2);

arr[15] = new Team("TxT           ", 1, 0, 13, 30, 3, 10, 2, 5, 2, 14, 0, 6, 0, 1);

arr[16] = new Team("KɸR〆         ", 9, 30, 6, 19, 2, 5, 4, 4, 4, 7, 4, 5, 0, 6);

arr[17] = new Team("RAPTORS       ", 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1, 4);

arr[18] = new Team("white walkers ", 0, 0, 2, 1, 0, 2, 5, 12, 3, 5, 0, 8, 1, 10);

arr[19] = new Team("KL01彡CREW    ", 7, 8, 1, 0, 1, 0, 0, 1, 0, 19, 1, 7, 4, 14);

arr[20] = new Team("RQD           ", 0, 0, 9, 2, 7, 16, 4, 3, 13, 16, 15, 22, 1, 0);

arr[21] = new Team("M24 ßoys      ", 4, 16, 1, 16, 0, 0, 0, 0, 1, 1, 1, 19, 2, 3);

arr[22] = new Team("TAFrecruit    ", 7, 1, 1, 0, 5, 19, 5, 14, 9, 22, 0, 2, 7, 16);

arr[23] = new Team("8DPKerala     ", 0, 0, 1, 0, 4, 6, 16, 30, 11, 30, 4, 14, 12, 30);

arr[24] = new Team("TPG๛          ", 4, 0, 8, 8, 10, 8, 1, 16, 0, 0, 3, 3, 2, 8);

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
