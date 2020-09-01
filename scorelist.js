class Team {
    constructor(t,kp1,pp1,kp2,pp2) {
        this.tname = t;
        this.kp1 = kp1;
        this.pp1 = pp1;
        this.kp2 = kp2;
        this.pp2 = pp2;
        this.overall = kp1 + pp1 + kp2 + pp2;
    }
}
var arr = [];
//arr[x] = new Team("Team name", kp1 , pp1 , kp2 , pp2 );


arr[0] = new Team("OG             ", 0, 0, 7, 6);

arr[1] = new Team(" XTRANJEROS    ", 1, 14, 0, 0);

arr[2] = new Team("TEAM PWOLI     ", 1, 2, 0, 3);

arr[3] = new Team("TEAM TTx       ", 0, 0, 0, 0);

arr[4] = new Team("BORNKILLERZ    ", 7, 22, 1,10);

arr[5] = new Team("TEAM I͜͡NSANE    ", 0, 0, 0, 0);

arr[6] = new Team("SpYDeR         ", 0, 5, 2, 14);

arr[7] = new Team("TEAM BT        ", 10, 19, 4, 4);

arr[8] = new Team(" KFG           ", 0, 4, 0, 0);

arr[9] = new Team("BRTHxkerala    ", 2, 3, 9, 7);

arr[10] = new Team("TEAM 6AM      ", 0, 10, 0,0);

arr[11] = new Team("TEAM IDEAL-1  ", 6, 7, 6, 22);

arr[12] = new Team("TEAM IDEAL-2  ", 0, 0, 0, 0);

arr[13] = new Team("Team ZOE      ", 0, 6, 0, 5);

arr[14] = new Team("GREAT LEOS    ",15, 12, 1, 12);

arr[15] = new Team("TxT           ", 1, 0, 13, 30);

arr[16] = new Team("KɸR〆         ", 9, 30, 6, 19);

arr[17] = new Team("RAPTORS       ", 1, 0, 0, 0);

arr[18] = new Team("white walkers ", 0, 0, 2, 1);

arr[19] = new Team("KL01彡CREW    ", 7, 8, 1, 0);

arr[20] = new Team("RQD           ", 0, 0, 9, 2);

arr[21] = new Team("M24 ßoys      ", 4, 16, 1, 16);

arr[22] = new Team("TAFrecruit    ", 7, 1, 1, 0);

arr[23] = new Team("8DPKerala     ", 0, 0, 1, 0);

arr[24] = new Team("TPG๛          ", 4, 0, 8, 8);

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length-1 ; j++) {
        if (arr[j].overall < arr[j + 1].overall) {
            t = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = t;
        }
        else if (arr[j].overall == arr[j + 1].overall) {
            var kpj = arr[j].kp1 + arr[j].kp2;
            var kpj2 = arr[j+1].kp1 + arr[j + 1].kp2;
            if (kpj < kpj2) {
                t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
}
