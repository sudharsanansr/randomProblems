let strings = ['The volume of events with "ap_mac - 5c5b35be26f2" is above normal','The volume of events with "ap_5c5b353e5cee_non_wifi_interference - 0.0" is above normal']
let regex = /.*\"ap_(mac\s-\s)?(.{2})(.{2})(.{2})(.{2})(.{2})(.{2}).*/gi
strings.forEach((item) => {
    console.log('item: '+item);
    console.log('arr: '+ regex.exec(item));
})