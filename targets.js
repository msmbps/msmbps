//
//
//
// Target servers of "PING ms"
// The full project is at https://github.com/pingms/pingms
//
// @pingms founded the project.
// @codehz greatly improved it.
// @pingms added "Test Download".
// @pingms added BandwagonHost and HostUS.
// @pingms removed HostUS, added RamNode and Host1Plus.
// @pingms added "Page #2 - Less Popular Cloud Providers".
//
// (@pingms - https://github.com/pingms)
// (@codehz - https://github.com/codehz)
//
//
//
// Page #1 - data of target servers
data1 = {
    OVH: [{
        name: "UK, London (ERI)",
        url: "http://eri.smokeping.ovh.net/",
    }, {
        name: "FR, North (GRA)",
        url: "http://gra.smokeping.ovh.net/",
    }, {
        name: "FR, North (RBX)",
        url: "http://rbx.smokeping.ovh.net/",
    }, {
        name: "FR, Eeast (SBG)",
        url: "http://sbg.smokeping.ovh.net/",
    }, {
        name: "DE, Frankfurt (LIM)",
        url: "http://lim.smokeping.ovh.net/",
    }, {
        name: "PL, Warsaw (WAW)",
        url: "http://waw.smokeping.ovh.net/",
    }, {
        name: "SG, Singapore (SGP)",
        url: "http://sgp.smokeping.ovh.net/",
    }, {
        name: "AU, Sydney (SYD)",
        url: "http://syd.smokeping.ovh.net/",
    }, {
        name: "CA-West, Montreal (BHS)",
        url: "http://bhs.smokeping.ovh.net/",
    }, {
        name: "US-West, Washington (VIN)",
        url: "http://vin.smokeping.ovh.net/",
//    }, {
//        name: "US-East, Portland (HIL)",
//        url: "http://hil.smokeping.ovh.net/",
    }]
};
//
//
if(location.hash=="#page2") {
    data = data2;
}
else {
    data = data1;
}
//
//
//
// END OF FILE
// The full project is at https://github.com/pingms/pingms
//
//
//
