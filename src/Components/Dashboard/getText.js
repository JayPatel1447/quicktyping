// Setting the deafult Random text - will disaply diff text each time 
export default() => {
    const texts = [
        'When I was in the department there were two things I hated in this world: private investigators and psychics',

        'I looked away, because he was staring at me, and I knew I was flushed, and I knew Id made a face, though',

        'Finally, I have someone I can pass on my wisdom to. Let me tell you about a couple of things I learned while working at the coffee house. First of all, the customer is always right.'
    ];

    /**
        * Math.floor - to display Random Text every time
    */
    return texts[Math.floor(Math.random()*texts.length)]
}