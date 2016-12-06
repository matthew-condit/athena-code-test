module.exports = {
    smallMorseProblems: [
        {
            given:'*-_-***',
            remove:'*-*',
            answer:2
        },
        // {
        //     given:'*-_-***_-*-*_-**',
        //     remove:'***_-',
        //     answer:0
        // },
        {
            given:'',
            remove:'',
            answer:0
        },
        {
            given:'****_*_*-**_*-**_---___*--_---_*-*_*-**_-**',
            remove:'****_*_*-**_*--*',
            answer:1311
        }
    ],
    benchMarkMorse :['****_*_*-**_*-**_---___*--_---_*-*_*-**_-**', '****_*_*-**_*--*'],

    twoDeletionProblems: [
        {
            given:'*-_-***_-*-*_-**',
            remove1: '***_-',
            remove2: '--**_-*',
            answer: 5
        },
        {
            given:'-_****_*___***_-_*-_*-*___*--_*-_*-*_***___***_*-_--*_*-',
            remove1: '-*--_---_-**_*-',
            remove2: '*-**_*_**_*-',
            answer: 11474
        }
    ]
}