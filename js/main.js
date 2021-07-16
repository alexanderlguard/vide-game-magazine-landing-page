var app = new Vue({
    el: '#app',
    data: {
        titles: [
            {
                "title": "spider-man",
                "company": "insomniac games",
                "videoUrl": "spider_man.mp4",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
                "title": "Ratchet & Clank: Rift Apart",
                "company": "insomniac games",
                "videoUrl": "ratchet_clank.mp4",
                "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
            },
            {
                "title": "Crash Bandicoot 4: It’s About Time",
                "company": "activision",
                "videoUrl": "crash_bandicoot_4.mp4",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
                "title": "Batman Arkham Knight",
                "company": "Rocksteady Studios",
                "videoUrl": "arkham_knight.mp4",
                "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.",
            },
            {
                "title": "One Piece World Seeker",
                "company": "Ganbarion",
                "videoUrl": "one_piece.mp4",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
        ],
        currentIndex: 1,
    },
    computed: {
        currentTitle: function() {
            return this.titles[this.currentIndex];
        },
        currentVideo: function() {
            return 'videos/' + this.currentTitle.videoUrl;
        },
        currentTitleName: function() {
            var maxLenght = 14;

            return this.currentTitle.title.match( new RegExp('.{1,' + maxLenght + '}', 'g' ) );
        },
        titleCount: function() {
            return this.titles.length - 1;
        },
        svgHeight: function() {
            return (this.currentTitleName.length * 4.5) + 'rem';
        }
    },
    methods: {
        nextTitle: function() {
            this.currentIndex = (this.currentIndex < this.titleCount)? this.currentIndex+1: 0;
        },
        prevTitle: function() {
            this.currentIndex = (this.currentIndex > 0)? this.currentIndex-1 : this.titleCount;
        },
        selectTitle: function(index) {
            this.currentIndex = index;
        }
    },
});