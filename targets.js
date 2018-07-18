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
//
// (@pingms - https://github.com/pingms)
// (@codehz - https://github.com/codehz)
//
//
//
// Data of target servers
data = {
    MicrosoftAzure: [{
        name: "Netherlands",
        url: "http://eu-west-azure.cloudharmony.net/"
    }, {
        name: "Ireland",
        url: "http://eu-north-azure.cloudharmony.net/"
    }, {
        name: "Cardiff",
        url: "http://uk-west-azure.cloudharmony.net/"
    }, {
        name: "London",
        url: "http://uk-south-azure.cloudharmony.net/"
    }, {
        name: "Quebec City",
        url: "http://canada-east-azure.cloudharmony.net/"
    }, {
        name: "Toronto",
        url: "http://canada-central-azure.cloudharmony.net/"
    }, {
        name: "California",
        url: "http://us-west-azure.cloudharmony.net/"
    }, {
        name: "West US 2",
        url: "http://us-west2-azure.cloudharmony.net/"
    }, {
        name: "Iowa",
        url: "http://us-central-azure.cloudharmony.net/"
    }, {
        name: "West Central US",
        url: "http://us-westcentral-azure.cloudharmony.net/"
    }, {
        name: "Texas	",
        url: "http://us-southcentral-azure.cloudharmony.net/"
    }, {
        name: "Illinois",
        url: "http://us-northcentral-azure.cloudharmony.net/"
    }, {
        name: "Virginia	2",
        url: "http://us-east2-azure.cloudharmony.net/"
    }, {
        name: "Virginia",
        url: "http://us-east-azure.cloudharmony.net/"
    }, {
        name: "Osaka",
        url: "http://japan-west.cloudharmony.net/"
    }, {
        name: "Tokyo, Saitama",
        url: "http://japan-east-azure.cloudharmony.net/"
    }, {
        name: "Hong Kong",
        url: "http://asia-east-azure.cloudharmony.net/"
    }, {
        name: "Seoul",
        url: "http://korea-central-azure.cloudharmony.net/"
    }, {
        name: "Busan",
        url: "http://korea-south-azure.cloudharmony.net/"
    }, {
        name: "Singapore",
        url: "http://asia-southeast-azure.cloudharmony.net/"
    }, {
        name: "Pune",
        url: "http://india-central-azure.cloudharmony.net/"
    }, {
        name: "Mumbai",
        url: "http://india-west-azure.cloudharmony.net/"
    }, {
        name: "Chennai",
        url: "http://india-south-azure.cloudharmony.net/"
    }, {
        name: "New South Wales",
        url: "http://australia-east-azure.cloudharmony.net/"
    }, {
        name: "Victoria",
        url: "http://australia-southeast-azure.cloudharmony.net/"
    }, {
        name: "Sao Paulo State",
        url: "http://brazil-south-azure.cloudharmony.net/"
    }],
    AmazonWebServices: [{
        name: "Asia Pacific (Seoul)",
        url: "http://ap-northeast-2-ec2.cloudharmony.net/"
    }, {
        name: "US West (N. California)",
        url: "http://us-west-1-ec2.cloudharmony.net/"
    }, {
        name: "US West (Oregon)",
        url: "http://us-west-2-ec2.cloudharmony.net/"
    }, {
        name: "Asia Pacific (Sydney)",
        url: "http://ap-southeast-2-ec2.cloudharmony.net/"
    }, {
        name: "Asia Pacific (Tokyo)",
        url: "http://ap-northeast-1-ec2.cloudharmony.net/"
    }, {
        name: "EU (Frankfurt)",
        url: "http://eu-central-1-ec2.cloudharmony.net/"
    }, {
        name: "Canada (Central)",
        url: "http://ca-central-1-ec2.cloudharmony.net/"
    }, {
        name: "US East (Ohio)",
        url: "http://us-east-2-ec2.cloudharmony.net/"
    }, {
        name: "EU (Ireland)",
        url: "http://eu-west-1-ec2.cloudharmony.net/"
    }, {
        name: "EU (London)",
        url: "http://eu-west-2-ec2.cloudharmony.net/"
    }, {
        name: "South America (São Paulo)",
        url: "http://sa-east-1-ec2.cloudharmony.net/"
    }, {
        name: "Asia Pacific (Singapore)",
        url: "http://ap-southeast-1-ec2.cloudharmony.net/"
    }, {
        name: "US East (N. Virginia)",
        url: "http://us-east-1-ec2.cloudharmony.net/"
    }, {
        name: "Asia Pacific (Mumbai)",
        url: "http://ap-south-1-ec2.cloudharmony.net/"
    }],
    GoogleCloudEngine: [{
        name: "Tokyo, Japan",
        url: "http://asia-northeast1-gce.cloudharmony.net/"
    }, {
        name: "Changhua County, Taiwan",
        url: "http://asia-east1-gce.cloudharmony.net/"
    }, {
        name: "Jurong West, Singapore",
        url: "http://asia-southeast1-gce.cloudharmony.net/"
    }, {
        name: "Sydney, Australia",
        url: "http://australia-southeast1-gce.cloudharmony.net/"
    }, {
        name: "Frankfurt, Germany",
        url: "http://europe-west3-gce.cloudharmony.net/"
    }, {
        name: "London, U.K.",
        url: "http://europe-west2-gce.cloudharmony.net/"
    }, {
        name: "St. Ghislain, Belgium",
        url: "http://europe-west1-gce.cloudharmony.net/"
    }, {
        name: "The Dalles, Oregon, USA",
        url: "http://us-west1-gce.cloudharmony.net/"
    }, {
        name: "South Carolina, USA",
        url: "http://us-east1-gce.cloudharmony.net/"
    }, {
        name: "Ashburn, Virginia, USA",
        url: "http://us-east4-gce.cloudharmony.net/"
    }, {
        name: "Council Bluffs, Iowa, USA",
        url: "http://us-central1-gce.cloudharmony.net/"
    }, {
        name: "São Paulo, Brazil",
        url: "http://southamerica-east1-gce.cloudharmony.net/"
    }],
    Bandwagonhost: [{
        name: "Hong Kong PCCW",
        url: "http://23.252.97.148/"
    }, {
        name: "Los Angeles DC9 CN2 GIA",
        url: "http://65.49.131.102/"
    }, {
        name: "Los Angeles DC3 CN2 KVM QN-1",
        url: "http://23.252.103.101/"
    }, {
        name: "Los Angeles DC8 CN2 KVM QN-2",
        url: "http://65.49.198.150/"
    }, {
        name: "Los Angeles DC8 CN2 KVM C3",
        url: "http://23.252.99.102/"
    }, {
        name: "Los Angeles DC2 KVM QNET",
        url: "http://23.252.96.201/"
    }, {
        name: "Los Angeles DC2 OVZ QNET",
        url: "http://232.252.103.101/"
    }, {
        name: "Los Angeles DC4 MCOM",
        url: "http://98.142.136.11/"
    }, {
        name: "Phoenix USAZ_2",
        url: "http://198.35.46.28/"
    }, {
        name: "Fremont USCA_FMT",
        url: "http://184.105.138.67/"
    }, {
        name: "New York USNY_2",
        url: "http://208.167.227.122/"
    }, {
        name: "Florida",
        url: "http://23.252.104.22/"
    }, {
        name: "Netherlands EUNL_3",
        url: "http://45.62.120.202/"
    }, {
        name: "Vancouver CABC_1",
        url: "http://172.93.32.16/"
    }],
    Vultr: [{
        name: "Frankfurt",
        url: "http://fra-de-ping.vultr.com/",
        download: "http://fra-de-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "Amsterdam",
        url: "http://ams-nl-ping.vultr.com/",
        download: "http://ams-nl-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "Paris",
        url: "http://par-fr-ping.vultr.com/",
        download: "http://par-fr-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "London",
        url: "http://lon-gb-ping.vultr.com/",
        download: "http://lon-gb-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "Singapore",
        url: "http://sgp-ping.vultr.com/",
        download: "http://sgp-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "Tokyo",
        url: "http://hnd-jp-ping.vultr.com/",
        download: "http://hnd-jp-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "New Jersey",
        url: "http://nj-us-ping.vultr.com/",
        download: "http://nj-us-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "Chicago",
        url: "http://il-us-ping.vultr.com/",
        download: "http://il-us-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "Seattle",
        url: "http://wa-us-ping.vultr.com/",
        download: "http://wa-us-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "Atlanta",
        url: "http://ga-us-ping.vultr.com/",
        download: "http://ga-us-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "Miami",
        url: "http://fl-us-ping.vultr.com/",
        download: "http://fl-us-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "Dallas",
        url: "http://tx-us-ping.vultr.com/",
        download: "http://tx-us-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "Silicon Valley",
        url: "http://sjo-ca-us-ping.vultr.com/",
        download: "http://sjo-ca-us-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "Los Angeles",
        url: "http://lax-ca-us-ping.vultr.com/",
        download: "http://lax-ca-us-ping.vultr.com/vultr.com.100MB.bin"
    }, {
        name: "Sydney",
        url: "http://syd-au-ping.vultr.com/",
        download: "http://syd-au-ping.vultr.com/vultr.com.100MB.bin"
    }],
    Linode: [{
        name: "Newark",
        url: "http://speedtest.newark.linode.com/",
        download: "http://speedtest.newark.linode.com/100MB-newark.bin"
    }, {
        name: "Atlanta",
        url: "http://speedtest.atlanta.linode.com/",
        download: "http://speedtest.atlanta.linode.com/100MB-atlanta.bin"
    }, {
        name: "Dallas",
        url: "http://speedtest.dallas.linode.com/",
        download: "http://speedtest.dallas.linode.com/100MB-dallas.bin"
    }, {
        name: "Fremont",
        url: "http://speedtest.fremont.linode.com/",
        download: "http://speedtest.fremont.linode.com/100MB-fremont.bin"
    }, {
        name: "Frankfurt",
        url: "http://speedtest.frankfurt.linode.com/",
        download: "http://speedtest.frankfurt.linode.com/100MB-frankfurt.bin"
    }, {
        name: "London",
        url: "http://speedtest.london.linode.com/",
        download: "http://speedtest.london.linode.com/100MB-london.bin"
    }, {
        name: "Singapore",
        url: "http://speedtest.singapore.linode.com/",
        download: "http://speedtest.singapore.linode.com/100MB-singapore.bin"
    }, {
        name: "Tokyo 2",
        url: "http://speedtest.tokyo2.linode.com/",
        download: "http://speedtest.tokyo2.linode.com/100MB-tokyo2.bin"
    }],
    DigitalOcean: [{
        name: "NYC1",
        url: "http://speedtest-nyc1.digitalocean.com/",
        download: "http://speedtest-nyc1.digitalocean.com/100mb.test"
    }, {
        name: "NYC2",
        url: "http://speedtest-nyc2.digitalocean.com/",
        download: "http://speedtest-nyc2.digitalocean.com/100mb.test"
    }, {
        name: "NYC3",
        url: "http://speedtest-nyc3.digitalocean.com/",
        download: "http://speedtest-nyc3.digitalocean.com/100mb.test"
    }, {
        name: "AMS2",
        url: "http://speedtest-ams2.digitalocean.com/",
        download: "http://speedtest-ams2.digitalocean.com/100mb.test"
    }, {
        name: "AMS3",
        url: "http://speedtest-ams3.digitalocean.com/",
        download: "http://speedtest-ams3.digitalocean.com/100mb.test"
    }, {
        name: "SFO1",
        url: "http://speedtest-sfo1.digitalocean.com/",
        download: "http://speedtest-sfo1.digitalocean.com/100mb.test"
    }, {
        name: "SFO2",
        url: "http://speedtest-sfo2.digitalocean.com/",
        download: "http://speedtest-sfo2.digitalocean.com/100mb.test"
    }, {
        name: "SGP1",
        url: "http://speedtest-sgp1.digitalocean.com/",
        download: "http://speedtest-sgp1.digitalocean.com/100mb.test"
    }, {
        name: "LON1",
        url: "http://speedtest-lon1.digitalocean.com/",
        download: "http://speedtest-lon1.digitalocean.com/100mb.test"
    }, {
        name: "FRA1",
        url: "http://speedtest-fra1.digitalocean.com/",
        download: "http://speedtest-fra1.digitalocean.com/100mb.test"
    }, {
        name: "TOR1",
        url: "http://speedtest-tor1.digitalocean.com/",
        download: "http://speedtest-tor1.digitalocean.com/100mb.test"
    }, {
        name: "BLR1",
        url: "http://speedtest-blr1.digitalocean.com/",
        download: "http://speedtest-blr1.digitalocean.com/100mb.test"
    }],
    VirMach: [{
        name: "Frankfurt",
        url: "http://ffm.lg.virmach.com/",
        download: "http://ffm.lg.virmach.com/100MB.test"
    }, {
        name: "Amsterdam",
        url: "http://ams.lg.virmach.com/",
        download: "http://ams.lg.virmach.com/100MB.test"
    }, {
        name: "Buffalo",
        url: "http://ny.lg.virmach.com/",
        download: "http://ny.lg.virmach.com/100MB.test"
    }, {
        name: "Piscataway (NYC)",
        url: "http://nj.lg.virmach.com/",
        download: "http://nj.lg.virmach.com/100MB.test"
    }, {
        name: "Dallas",
        url: "http://dal.lg.virmach.com/",
        download: "http://dal.lg.virmach.com/100MB.test"
    }, {
        name: "Phoenix",
        url: "http://phx.lg.virmach.com/",
        download: "http://phx.lg.virmach.com/100MB.test"
    }, {
        name: "Los Angeles",
        url: "http://la.lg.virmach.com/",
        download: "http://la.lg.virmach.com/100MB.test"
    }, {
        name: "DDoS-Protected Los Angeles",
        url: "http://filtered-la.lg.virmach.com/",
        download: "http://filtered-la.lg.virmach.com/100MB.test"
    }, {
        name: "Chicago",
        url: "http://chi.lg.virmach.com/",
        download: "http://chi.lg.virmach.com/100MB.test"
    }, {
        name: "Seattle",
        url: "http://sea.lg.virmach.com/",
        download: "http://sea.lg.virmach.com/100MB.test"
    }, {
        name: "Atlanta",
        url: "http://atl.lg.virmach.com/",
        download: "http://atl.lg.virmach.com/100MB.test"
    }, {
        name: "San Jose",
        url: "http://sj.lg.virmach.com/",
        download: "http://sj.lg.virmach.com/100MB.test"
    }],
    //
    // Official test URLs of BandwagonHost
    // (BandwagonHost does not publicly provide test URLs)
    // (These are obtained by directly asking BandwagonHost)
    BandwagonHost: [{
        name: "Los Angeles DC9 CN2 GIA KVM",
        url: "http://65.49.131.102/"
    }, {
        name: "Los Angeles DC3 CN2 KVM",
        url: "http://23.252.103.101/"
    }, {
        name: "Los Angeles DC8 CN2 KVM",
        url: "http://23.252.99.102/"
    }, {
        name: "Los Angeles DC2 QNET KVM",
        url: "http://23.252.96.201/",
        download: "http://23.252.96.201/100mb.bin"
    }, {
        name: "Los Angeles DC2 QNET OpenVZ",
        url: "http://104.194.76.20/",
        download: "http://104.194.76.20/100mb.bin"
    }, {
        name: "Los Angeles DC4 MCOM",
        url: "http://98.142.136.11/",
        download: "http://98.142.136.11/100mb.bin"
    }, {
        name: "Phoenix",
        url: "http://198.35.46.28/",
        download: "http://198.35.46.28/100mb.bin"
    }, {
        name: "Fremont",
        url: "http://184.105.138.67/",
        download: "http://184.105.138.67/100mb.bin"
    }, {
        name: "New York",
        url: "http://208.167.227.122/",
        download: "http://208.167.227.122/100mb.bin"
    }, {
        name: "Netherlands",
        url: "http://45.62.120.202/",
        download: "http://45.62.120.202/100mb.bin"
    }, {
        name: "Vancouver",
        url: "http://172.93.32.16/",
        download: "http://172.93.32.16/100mb.bin"
    }],
    //
    // Source: https://www.ramnode.com/
    RamNode: [{
        name: "New York City",
        url: "http://lg.nyc.ramnode.com/",
        download: "http://lg.nyc.ramnode.com/static/100MB.test"
    }, {
        name: "Atlanta",
        url: "http://lg.atl.ramnode.com/",
        download: "http://lg.atl.ramnode.com/static/100MB.test"
    }, {
        name: "Seattle",
        url: "http://lg.sea.ramnode.com/",
        download: "http://lg.sea.ramnode.com/static/100MB.test"
    }, {
        name: "Los Angeles",
        url: "http://lg.la.ramnode.com/",
        download: "http://lg.la.ramnode.com/static/100MB.test"
    }, {
        name: "Netherlands",
        url: "http://lg.nl.ramnode.com/",
        download: "http://lg.nl.ramnode.com/static/100MB.test"
    }],
    //
    // Source: https://www.host1plus.com/data-centers/
    Host1Plus: [{
        name: "Los Angeles",
        url: "http://191.101.236.61/",
        download: "http://191.101.236.61/100mb"
    }, {
        name: "Chicago",
        url: "http://181.214.61.207/",
        download: "http://181.214.61.207/100mb"
    }, {
        name: "São Paulo",
        url: "http://191.96.4.248/",
        download: "http://191.96.4.248/100mb"
    }, {
        name: "Frankfurt",
        url: "http://185.137.13.237/",
        download: "http://185.137.13.237/100mb"
    }, {
        name: "Johannesburg",
        url: "http://196.251.248.78/",
        download: "http://196.251.248.78/100mb"
    }]
};
//
//
//
// END OF FILE
// The full project is at https://github.com/pingms/pingms
//
//
//