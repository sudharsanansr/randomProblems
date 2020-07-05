let strings = ["sudhar@aol.com","sudhars.ravichandran@google.net","9790058385@myGov.in","helloWorld@heyThere@egt"];
let regex = /\w+\.?\w+@\w+\.(com|net|in)/
strings.forEach(item => {
    console.log(regex.test(item));
})