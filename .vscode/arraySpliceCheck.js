let work = ['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp'];
let social = ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium'];
let video = ['Netflix', 'YouTube', 'Vimeo', 'Vine'];

console.log(work);
let beforeWork = work.splice(0,1);
console.log(work);
let afterWork = work.splice(2);
console.log(work);
console.log(beforeWork);
console.log(afterWork);
console.log('/**************/');
console.log(video);
let beforeVideo = video.splice(0,2);
console.log(video);
let afterVideo = video.splice(3);
console.log(video);
console.log(beforeVideo);
console.log(afterVideo);